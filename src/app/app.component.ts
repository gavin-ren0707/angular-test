import { Component, OnInit,Input,OnChanges,SimpleChanges} from '@angular/core';
// 匯入表單相關功能
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Days,TaipeiZip } from 'src/app/days';
@Component({
  selector: 'app-price',
  template: `<span class="price" [ngClass]="{increase:price > lastPrice,decrease:price
  < lastPrice}" >
     {{price}}
     <span>{{firstChange ? '':(price > lastPrice ? '↑':'↓')}} </span>
     </span>`,
  styles: [
    `.price {background:black; color: white;}
     .increase { color:red; }
     .decrease { color:green; }
    `
  ],
})
export class PriceComponent implements OnInit,OnChanges {
  @Input() price;
  firstChange = true;
  lastPrice;
  ngOnInit(){
    console.log('Price Component Init');
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('Price Component Input Changed');
    this.firstChange = changes['price'].firstChange;
    this.lastPrice = changes['price'].previousValue;
  }

}
@Component({
  selector: 'my-app',
  template: `
  <app-price [price]="value"></app-price>
  <button (click)="increase()">Increase</button>
  <button (click)="decrease()">Decrease</button>`,
})
export class AppComponent {
  value = 100;
  title = 'pipe';
  heros = [
    { name: '大雄', score: 0 },
    { name: '靜香', score: 90 },
    { name: '胖虎', score: 50 },
    { name: '小夫', score: 70 },
    { name: '小杉', score: 100 },
  ]
  increase(){
      this.value+=2;
  }
  decrease(){
    this.value-=2;
}

  // applyForm: FormGroup //表單的名稱 applyForm,表單的型別是一個表單的集合,每個表單控制元件集合
  // showSecret = false;
  // constructor(private fb: FormBuilder) { } //將表單相關元件啟動
  // ngOnInit() {
  //   console.log('Price Component Init');
  //   console.log('777',Days.Mon);
  //   console.log('888',TaipeiZip.信義區);
  //   console.log('999',TaipeiZip.萬華區);
  //   console.log('000',TaipeiZip[ TaipeiZip.南港區]);
  //   this.applyForm = this.fb.group({  //在這個元件啟動時,建立每個表單的控制元件
  //     userName: ["可以預設資料", Validators.required],
  //     password: ["", [Validators.required, Validators.minLength(6)]],
  //     email: ["", [Validators.required, Validators.email]],
  //     secret: [""],
  //     talk: [""],
  //   })
  //   this.detectSecret();
  // }
  // ngOnChanges() {
  //   console.log('Price Component Input Changed');
  // }
  // detectSecret() {
  //   const secret$ = this.applyForm.get('secret');  //取得secret控制元件
  //   secret$.valueChanges.subscribe(e => {        //監聽secret控制元件的變化
  //     console.log('555', e);
  //     if (e === 'secret') {
  //       this.showSecret = true;
  //       this.applyForm.patchValue({   //patchvalue修改表單
  //         talk: ''
  //       })
  //     }
  //     else {
  //       this.showSecret = false;
  //     }
  //   })
  // }
  // sendForm() {
  //   console.log('777',this.applyForm.value);
  //   this.applyForm.reset({   //重置表單
  //     userName: '',
  //     password: '',
  //     email: '',
  //     secret: '',
  //     talk: '',
  //   })
  // }
}
