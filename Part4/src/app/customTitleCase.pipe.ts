import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'customTitleCase'
})

export class CustomTitleCasePipe implements PipeTransform{
    transform(value: String) {

        let prepositions =['of','the'];

        if(!value){
            return null;
        }

        else{

            let wordList = value.split(" ");

            for(let i=0; i < wordList.length ; i++){
                
                if(i>0 && prepositions.includes(wordList[i].toLowerCase())){
                    wordList[i] = wordList[i].toLowerCase();
                }else{
                    wordList[i] = wordList[i].substring(0,1).toUpperCase() + wordList[i].substring(1).toLowerCase();
                }

            }



            return wordList.join(" ");
        }
    }
}