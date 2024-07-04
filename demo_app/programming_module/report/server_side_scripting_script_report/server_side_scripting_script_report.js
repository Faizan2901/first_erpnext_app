// Copyright (c) 2024, Faizan Sopariwala and contributors
// For license information, please see license.txt

frappe.query_reports["Server Side Scripting Script Report"] = {
	"filters": [
		{
			"fieldname":"name",
			"label":__("Server Side Scripting"),
			"fieldtype":"Link",
			"options":"Server Side Scripting"
		},
		{
			"fieldname":"dob",
			"label":__("DOB"),
			"fieldtype":"Date",
			// "options":"Server Side Scripting"
		},
		{
			"fieldname":"age",
			"label":__("Age"),
			"fieldtype":"Data",
			// "options":"Server Side Scripting"
		}
	

	]
};
