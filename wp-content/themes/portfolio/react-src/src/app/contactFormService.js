import axios from "axios";
const FORM = '_FORM'

export function ErrorValidation(errors){
    this.errors = errors;
}

export default class formService {
    validate = (form) => {
        const errors = []

        if(!form.nome){
            errors.push('Preencha o campo nome');
        }

        if(!form.email){
            errors.push('Preencha o campo email');
        }

        if(!form.assunto){
            errors.push('Preencha o campo assunto');
        }

        if(!form.mensagem){
            errors.push('Preencha o campo mensagem');
        }

        if(errors.length  > 0){
            throw new ErrorValidation(errors);
         }
    }

    getFormData = () =>{
        let rows = localStorage.getItem(FORM);
        if(!rows){
            return[];
        }
        return JSON.parse(rows); /* O LocalStorage só armazena strings, o JSON Parse converte para JSON */
    }

    save = (form) =>{
        console.log(form);
        this.validate(form);

        //let forms = localStorage.getItem(FORM);
        //if(!forms){
            //forms = [] /*recebe um array vazio*/
        //}else{
            //const obj =
            //forms.JSON.parse(forms);
        //}
        //forms.push(form); /* adiciona o array do produto no array existente */
        //localStorage.setItem(FORM, JSON.stringify(forms));
    }


}