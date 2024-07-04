frappe.pages['programming-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Demo Page',
		single_column: true
	});
	page.set_title('My Page')

	page.set_indicator('Done','green') // Done,Cancelled

	var $btn=page.set_primary_action('New',()=> frappe.msgprint('Clicked New Button'))

	var $btnOne=page.set_secondary_action('Refresh',()=> frappe.msgprint('Clicked Refresh Button'))

	page.add_menu_item('Send Email',()=>{
		frappe.msgprint("Click for send email")
	})

	page.add_action_item('Delete',()=>{
		frappe.msgprint("Clicked for deletetion")
	})

	let field=page.add_field({
		label: 'Status',
		fieldtype:'Select',
		fieldname:'status',
		options:[
			'Open','Closed','Cancelled'
		],
		default:'Closed',
		change(){
			frappe.msgprint(field.get_value())
		}
	})

	// $(frappe.render_template("programming_page",{})).appendTo(page.body)

	$(frappe.render_template("programming_page",{
		data: "Hi Mohammad Faizan"
	})).appendTo(page.body)
}

