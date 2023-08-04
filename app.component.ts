import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry = 'india';

  query:string;
  startDate:string;
  endDate:string;

  outputPath:string;
  dbTableName:string;

  outputType:string;
  outputFormat:string;
  country: string;

  defaultoutputType = 'Table';
  defaultoutputFormat = 'CSV';


  outputFormatValues = [
    {id: '1', value: 'CSV'},
    {id: '2', value: 'JSON'}
  ]
  
  outputTypeValues = [
    {id: '1', value: 'Table'},
    {id: '2', value: 'HDFS'}
  ]
  
  @ViewChild('myForm') form: NgForm;

  onSubmit(){
    console.log(this.form);

    // this.query = this.form.value.personDetails.query;
    // this.startDate = this.form.value.personDetails.startDate;
    // this.endDate = this.form.value.personDetails.endDate;
    // this.outputPath = this.form.value.personDetails.outputPath;
    // this.dbTableName = this.form.value.personDetails.dbTableName;

    this.query = this.form.value.query;
    this.startDate = this.form.value.startDate;
    this.endDate = this.form.value.endDate;
    this.outputPath = this.form.value.outputPath;
    this.dbTableName = this.form.value.dbTableName;
    this.outputType = this.form.value.outputType;
    this.outputFormat = this.form.value.outputFormat;
    this.country = this.form.value.country;
    console.log(this.query + '   ' + this.startDate);
    
    this.form.reset({
      outputType : this.defaultoutputType,
      outputFormat : this.defaultoutputFormat
    });
  
  }

  setDefaultValues(){
    // this.form.value.personDetails.firstname = 'John';
    // this.form.value.personDetails.lastname = 'smith';
    // this.form.value.personDetails.email = 'abc@example.com';
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com'
    //   }
    // })

    this.form.form.patchValue({
      personDetails: {
         firstname: 'John',
         dbTableName : 'dbTableNameForpatch',
         outputPath : 'dbTableNameForpatch'
      }
    })
  }
}
