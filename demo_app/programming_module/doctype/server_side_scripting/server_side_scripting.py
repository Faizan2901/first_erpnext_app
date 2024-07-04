# Copyright (c) 2024, Faizan Sopariwala and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document


class ServerSideScripting(Document):
	pass
	# @frappe.whitelist()
	# def frm_call(self,msg):
	# 	import time
	# 	time.sleep(5)
	# 	# frappe.msgprint(msg)
	# 	self.mobile_no=1235865
	# 	return "Hi This message from frm_call"
	
	# def validate(self):
	# 	# frappe.msgprint("Hello Faizan")

	# 	frappe.msgprint(_("Your name is '{0}' ").format(
	# 		self.first_name+" "+self.middle_name+" "+self.last_name
	# 	))
	# 	for row in self.get("family_members"):
	# 		frappe.msgprint(_("{0}. The Family members is '{1}' and relation is '{2}' and age is '{3}' ").format(
	# 			row.idx,row.name1,row.relation,row.age
	# 		))

	# frappe.get_doc(doctype,name)  returns a Document object of the record identified by doctype and name
	# frappe.new_doc(doctype) create new Document
	# frappe.delete_doc(doctype,name) delete document
	# frappe.db.get_list(doctype,filter,or filters,fields,order_by,group_by,start,page_length)
	# frappe.db.get_value(doctype,name,fields)
	# frappe.db.set_value(doctype,name,fieldname,value)
	# frappe.db.exists(doctype,name)
	# frappe.db.count(doctype,filters)
	# frappe.db.sql(query,filters,as_dict)

	#Document Methods
	#1. doc.insert()
	#2. doc.save()
	#3. doc.delete()
	#4. doc.db_set()

	# def validate(self):
		# self.get_document()
		# self.new_document()
		# self.delete_document()
		# self.db_set_document()
		# self.get_list()
		# self.get_value()
		# self.set_value()
		# self.sql()
		

		# if frappe.db.exists('Client Side Scripting',self.client_side_doc):
		# 	frappe.msgprint(_("The Document is Exists in Database"))
		# else:
		# 	frappe.msgprint(_("The Document does not Exists in Database"))

		# doc_count=frappe.db.count('Client Side Scripting',{'first_name':'Mohammad Faizan'})
		# frappe.msgprint(_("The Enable Document Count is {0}").format(doc_count))
		


	def get_document(self):
		doc=frappe.get_doc('Client Side Scripting', self.client_side_doc)
		frappe.msgprint(_("The Full name Name is {0} and Age is {1}").format(doc.first_name+" "+doc.middle_name+" "+doc.last_name,doc.age))

		for row in doc.get("family_members"):
			frappe.msgprint(_("{0}. The Family members is '{1}' and relation is '{2}' and age is '{3}' ").format(
				row.idx,row.name1,row.relation,row.age
			))

	def new_document(self):
		doc=frappe.new_doc('Client Side Scripting')
		doc.first_name='Mohammad'
		doc.middle_name='M'
		doc.last_name='Sopariwala'
		doc.age=12

		doc.append("family_members",{
			"name1":"Faizan",
			"relation":"Brother",
			"age":22
		})

		doc.insert()

	def delete_document(self):
		# frappe.delete_doc('Client Side Scripting', self.client_side_doc)
		doc=frappe.get_doc('Client Side Scripting', self.client_side_doc)
		doc.delete()

	def db_set_document(self):
		doc=frappe.get_doc('Client Side Scripting',self.client_side_doc)
		doc.db_set('age',23)
	
	def get_list(self):
		doc=frappe.db.get_list('Client Side Scripting',
								filters={
									'enable':1
								},
								fields=['first_name','age']
								)
		for d in doc:
			frappe.msgprint(_("The Parent first name is {0} and age {1}").format(d.first_name,d.age))

	def get_value(self):
		first_name,age=frappe.db.get_value('Client Side Scripting', self.client_side_doc,['first_name','age'])
		frappe.msgprint(_("The parent first name is {0} and age is {1}").format(first_name,age))

	def set_value(self):

		frappe.db.set_value('Client Side Scripting',self.client_side_doc,'age',23)

		first_name,age=frappe.db.get_value('Client Side Scripting', self.client_side_doc,['first_name','age'])
		frappe.msgprint(_("The parent first name is {0} and age is {1}").format(first_name,age))

	def sql(self):

		data = frappe.db.sql("""
								SELECT
									first_name,
									age
								FROM
									`tabClient Side Scripting`
								WHERE
									enable = 1
							""",as_dict=1)
		for d in data:
			frappe.msgprint(_("The parent first name is {0} and age is {1}").format(d.first_name,d.age))


	# def before_save(self):
	# 	frappe.msgprint("Hello before_save event")
	
	# def before_insert(self):
	# 	frappe.msgprint("Hello before_insert event")

	# def after_insert(self):
	# 	frappe.msgprint("Hello after_insert event")

	# def on_update(self):
	# 	frappe.msgprint("Hello on_update event")

	# def before_submit(self):
	# 	frappe.msgprint("Hello before_submit event")

	# def on_submit(self):
	# 	frappe.msgprint("Hello on_submit event")

	# def on_cancel(self):
	# 	frappe.msgprint("Hello on_cancel event")

	# def on_trash(self):
	# 	frappe.msgprint("Hello on_trash event")

	# def after_delete(self):
	# 	frappe.msgprint("Hello after_delete event")
