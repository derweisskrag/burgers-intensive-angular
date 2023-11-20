import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";

export type ItemsProps = {
  image: string;
  title: string;
  description: string;
  price: number;
  grams: number;
  basePrice: number;
};


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'Burgers';

  currency: string = "$";
  newCurrency: string = this.currency; //default
  coefficient: number = 1

  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required]
  });

  productsData: ItemsProps[] = [
    {
      image: '1.png',
      title: 'Бургер чеддер & бекон',
      description: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      grams: 360,
      basePrice: 8
    },
    {
      image: '2.png',
      title: 'BBQ с беконом и курицей',
      description: 'Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ',
      price: 7,
      grams: 390,
      basePrice: 7
    },
    {
      image: '3.png',
      title: 'Дабл биф бургер',
      description: 'Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица',
      price: 10,
      grams: 420,
      basePrice: 10
    },
    {
      image: '4.png',
      title: 'Баварский бургер',
      description: 'Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг',
      price: 7,
      grams: 220,
      basePrice: 7
    },
    {
      image: '5.png',
      title: 'Бекон чизбургер',
      description: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень',
      price: 8,
      grams: 220,
      basePrice: 8
    },
    {
      image: '6.png',
      title: 'Индиана бургер',
      description: 'Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      price: 8,
      grams: 220,
      basePrice: 8
    },
    {
      image: '7.png',
      title: 'Вегги бургер',
      description: 'Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг',
      price: 8,
      grams: 280,
      basePrice: 8
    },
    {
      image: '8.png',
      title: 'Плаксивый Джо',
      description: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень',
      price: 7,
      grams: 380,
      basePrice: 7
    },
    {
      image: '9.png',
      title: 'Двойной чиз бургер',
      description: 'Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
      price: 11,
      grams: 400,
      basePrice: 11
    },
    {
      image: '10.png',
      title: 'Фрешбургер',
      description: 'Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат',
      price: 9,
      grams: 300,
      basePrice: 9
    },
    {
      image: '11.png',
      title: 'Цуккини бургер',
      description: 'Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень',
      price: 8,
      grams: 320,
      basePrice: 8
    },
    {
      image: '12.png',
      title: 'Двойной бургер чеддар',
      description: 'Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень',
      price: 9,
      grams: 360,
      basePrice: 9
    },
  ];

  constructor(private fb: FormBuilder){

  }

  scrollTo(target: HTMLElement, burger?: ItemsProps){
    target.scrollIntoView({
      behavior: "smooth",
    });

    if (burger) {
      this.form.patchValue({
        order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'
      });
    }
  }

  confirmOrder(){
    if(this.form.valid){
      alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
      this.form.reset();
    }
  }

  changeCurrency(){

    let updatedProductsData: ItemsProps[] = [];
    
    if(this.currency === "$") {
      this.newCurrency = "₽";
      this.coefficient = 80;
    } else if(this.currency === "₽") {
      this.newCurrency = "BYN";
      this.coefficient = 3;
    } else if (this.currency === 'BYN') {
        this.newCurrency = '€';
        this.coefficient = 0.9;
    } else if (this.currency === '€') {
        this.newCurrency = '¥';
        this.coefficient = 6.9;
    } else {
      this.newCurrency = "$"; // fixed - conditional logic
      this.coefficient = 1;
    }

    
    // React-like logic
    this.productsData.forEach((item: ItemsProps) => {
      updatedProductsData.push({
        ...item,
        price: +((item.basePrice * this.coefficient).toFixed(1)),
      });
    });


    this.currency = this.newCurrency;
    this.productsData = updatedProductsData;
  }
}
