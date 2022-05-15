import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PasswordValidators {


    static shouldBeUnique(control : AbstractControl) :Promise<ValidationErrors | null>{
        
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                //here is the actual function
                if(control.value==='1234')
                    resolve({shouldBeUnique :true});
                else
                    resolve(null);

            },200)
        });
    }


    static shouldBeMatch(control:AbstractControl){
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword?.value !== confirmPassword?.value)
            return {passwordShouldMatch:true};
        else
            return null;
        

    }
}