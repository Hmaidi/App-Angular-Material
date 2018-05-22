import { Component, OnInit, LOCALE_ID  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  options: FormGroup;
  constructor(private adapter: DateAdapter<any>, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Prenom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      civilite: new FormControl('', [Validators.required]),
      formControlFavorite: new FormControl('', [Validators.required])
    }
  );



  Slevel = [
    'Bac + 3',
    'Bac + 4',
    'Bac + 5',

  ];

  loginUser(f) {
    console.log('user pressed the login btn');
    console.log(f.value);
  }
  french() {
    this.adapter.setLocale('fr');
  }
  myFilter = (d: Date): boolean => {

    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  ngOnInit() {
  }

}
