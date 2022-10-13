import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckEmail } from '../validators/check-email';
import { CreateFormValidator } from '../validators/create-form-validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  // ! The below Form example uses regular FormGroup
  // createForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl(
  //     '',
  //     [Validators.required, Validators.email],
  //     [this.checkEmail.validate]
  //   ),
  //   password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]),
  //   confirmPassword: new FormControl('', Validators.required),
  //   phone: new FormControl('')
  // }, [CreateFormValidator.match('password', 'confirmPassword')])

  // ! The Below Form example uses FormBuilder
  createForm = this.fb.group({
    name: ['', {
      validators: [Validators.required]
    }],
    email: ['', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [this.checkEmail.validate]
    }],
    password: ['', {
      validators: [Validators.required, CreateFormValidator.checkPasswordStrength()]
    }],
    confirmPassword: ['', Validators.required],
    phone: [''],
    address: this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      area: ['', Validators.required]
    }),
    roles: this.fb.array([])
  }, {
    validators: [CreateFormValidator.match('password', 'confirmPassword')]
  })

  constructor(
    private checkEmail: CheckEmail,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get rolesFieldAsFormArray() {
    return this.createForm.get('roles') as FormArray;
  }

  role() {
    return this.fb.group({
      role: this.fb.control('')
    })
  }

  addControl() {
    this.rolesFieldAsFormArray.push(this.role())
  }

  remove(i: number): void {
    this.rolesFieldAsFormArray.removeAt(i);
  }

  createAccount() {
    console.log('form is ', this.createForm);
    console.log('form value is ', this.createForm.value);
  }

}
