import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
    static cannotContainSpaceMethod(control:AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >=0){
            return {cannotContainSpaceReturn: true};
        }else{
            return null;
        }
        
    }



    static shouldBeUnique(control:AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=> {

            setTimeout(() => {
                //here is the actual function
                if(control.value ==='mosh')
                    resolve({shouldBeUnique : true});
                else
                    resolve(null);

            },2000)

        });
    }

    
}


