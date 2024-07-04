// Copyright (c) 2024, Faizan Sopariwala and contributors
// For license information, please see license.txt

frappe.ui.form.on("Server Side Scripting", {
	
    // enable:function(frm){
    //     frm.call({
    //         doc:frm.doc,
    //         method:'frm_call',
    //         args:{
    //             msg:"Helloo"
    //         },
    //         freeze:true,
    //         freeze_message:__('Calling frm_call method'),
    //         callback:function(r){
    //             // frappe.msgprint(r.message)
    //         }
    //     });
    // },
    enable:function(frm){
        frappe.call({
            method:"demo_app.programming_module.doctype.client_side_scripting.client_side_scripting.frappe_call",
            args:{
                msg:"Helloooo"
            },
            freeze:true,
            freeze_message:__('Calling frappe_call method'),
            callback:function(r){
                frappe.msgprint(r.message)
            }
        });
    }


});
