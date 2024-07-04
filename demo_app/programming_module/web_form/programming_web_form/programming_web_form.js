frappe.ready(function() {
    console.log("Frappe is ready");
    
    // Make sure to bind the event inside the ready function
    // frappe.web_form.after_load = () => {
	// 	// frappe.msgprint('Please fill all values carefully');
	// 	frappe.web_form.on('enable',(field,value)=>{
	// 		frappe.msgprint("Hi User")
	// 	})
	// }

	// frappe.web_form.on('dob',(field,value)=>{
	// 	if(value){
	// 		dob=new Date(value);
	// 		var today=new Date();
	// 		var age=Math.floor((today - dob)/(365.25 * 24 * 60 * 60 * 1000))
	// 		frappe.web_form.set_value("age",[age])
	// 	}
	// })

	frappe.web_form.validate=()=>{
		email_id=frappe.web_form.get_value("email")
		console.log(email_id);
		var pattern=/^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
		
		if(!pattern.test(email_id) && email_id){
			frappe.msgprint('Enter a valid email address')
			return false
		}

		mobileNum=frappe.web_form.get_value("mobile_no")
		var validateMobNum=/^\d*(?:\.\d{1,2})?$/
		if(!validateMobNum.test(mobileNum) && mobileNum){
			frappe.msgprint('Enter a valid mobile number')
			return false
		}
		return true
	}
	
});
// frappe.ready(function() {
//     console.log("Frappe is ready");
    
//     // Check if frappe.web_form is available before using it
//     if (frappe.web_form) {
//         frappe.web_form.after_load = function() {
//             console.log("Web form loaded successfully");
//             frappe.msgprint('Please fill all values carefully');
//             console.log("hiiii");
//         };
//     } else {
//         console.log("frappe.web_form is not available.");
//     }
// });
// frappe.ready(function() {
//     frappe.web_form.after_load = function() {
//         console.log("Web form loaded successfully");
//     };
// });
