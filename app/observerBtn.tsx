'use client';

import React, { ComponentPropsWithoutRef } from 'react';

abstract class A_Observer {
   abstract update(): void;

   abstract notify(): void;
}

function sayHello(hello:string){
    return hello;
}


class ObservePerson extends A_Observer {
   private name: string;
   private age: number;

   constructor(name: string, age: number) {
      super();
      this.name = name;
      this.age = age;
   }

   update(): void {
      this.age++;
   }

   notify(): void {
      console.log(`notify : person ${this.name} has grown... he is now ${this.age} years old`);
   }
}

class ObserveBird extends A_Observer {
   race: string;
   color: string;

   constructor(race: string, color: string) {
      super();
      this.race = race;
      this.color = color;
   }

   update(): void {
      this.color = 'red';
   }

   notify(): void {
      console.log('Birds color is now red');
   }
}

class Subject {
   private observers: A_Observer[] = [];

   subscribe(observer: A_Observer) {
      this.observers.push(observer);
   }

   unsubscribe(observer: A_Observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
   }

   update() {
      this.observers.forEach(obs => obs.update());
      this.notify();
   }

   private notify() {
      this.observers.forEach(obs => obs.notify());
   }
}

type ButtonOrLinkProps = | ComponentPropsWithoutRef<'button'> & {as?:'button'}
| ComponentPropsWithoutRef<'a'> & {as : 'a'}


export function ObserverBtn() {
   const person = new ObservePerson('John', 20);
   const bird = new ObserveBird('Eagle', 'blue');
   const subject = new Subject();

   subject.subscribe(person);
   subject.subscribe(bird);
   console.log(person, bird);
   bird.notify()
   person.update()
   return <button className={'btn btn-xl btn-primary'} onClick={() => subject.update()}>Update </button>;
}
