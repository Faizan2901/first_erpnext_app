// Copyright (c) 2024, Faizan Sopariwala and contributors
// For license information, please see license.txt

frappe.ui.form.on("Client Side Scripting", {



	refresh:function(frm) {
        // frappe.msgprint("Hello Mohammad Faizan")
        // frappe.throw("This is Error message")
       
        // frm.set_intro('Now you can create a new client scripting doctype')

        if(frm.is_new()){
            frm.set_intro('Now you can create a new client scripting doctype')
        }

        // frm.add_custom_button('Click Me Button',()=>{
        //     frappe.msgprint(__('You Clicked Me!!'))
        // })
        frm.add_custom_button('Click Me1',()=>{
            frappe.msgprint(__('You Clicked Me 1!!'))
        },'click me')

        frm.add_custom_button('Click Me2',()=>{
            frappe.msgprint(__('You Clicked Me 2!!'))
        },'click me')

	},

    // onload:function(frm){
    //     frappe.msgprint("Welcome to MKFMTextile before onload Event")
    // }
    // validate:function(frm){
    //         // frappe.throw("Welcome to MKFMTextile from validate Event")
    //         frm.set_value('full_name',frm.doc.first_name+" "+frm.doc.middle_name+" "+frm.doc.last_name)
    //         let row=frm.add_child('family_members',{
    //             name1:'Aamena',
    //             relation:'Fiancee',
    //             age:'17'
    //         })
    //     }
    // before_save:function(frm){
    //     frappe.throw("Welcome to MKFMTextile from before_save Event")
    // }

    // after_save:function(frm){
    //     frappe.msgprint(__("The first name is '{0}' and middle name is '{1}' and last name is '{2}'",
    //         [frm.doc.first_name,frm.doc.middle_name,frm.doc.last_name]
    //     ))

    //     for(let row of frm.doc.family_members){
    //         frappe.msgprint(__("{0}. The family member name is '{1}' and relation is '{2}' and age is '{3}'",
    //             [row.idx,row.name1,row.relation,row.age]
    //         ))
    //     }
    // }

    

    enable:function(frm){
        // frappe.msgprint("Welcome to MKFMTextile from enable Event")
    //     frm.set_df_property('first_name','reqd',1)

    //     frm.set_df_property('middle_name','read_only',1)

            frm.toggle_reqd('age',true)
    },


    // age:function(frm){
    //     frappe.msgprint("Welcome to MKFMTextile from age Event")
    // }
    // family_members_on_form_rendered:function(frm){
    //     frappe.msgprint("Welcome to MKFMTextile from 'family_members' child table Event")
    // }
    // before_submit:function(frm){
    //     frappe.throw("Welcome to MKFMTextile from 'before_submit' Event")
    // }
    // on_submit:function(frm){
    //     frappe.msgprint("Welcome to MKFMTextile from 'on_submit' Event")
    // }
    // before_cancel:function(frm){
    //     frappe.throw("Welcome to MKFMTextile from 'before_cancel' Event")
    // },
    // after_cancel:function(frm){
    //     frappe.msgprint("Welcome to MKFMTextile from 'after_cancel' Event")
    // },
});

frappe.ui.form.on("Family Members", {
    // name1:function(frm){
    //     frappe.msgprint("Welcome  MKFMTextile from child Doctype 'name1' Event")
    // }
    // age(frm,cdt,cdn){
    //     frappe.msgprint("Welcome  MKFMTextile from child Doctype 'age' Event")   
    // }
});
