SELECT field1.id, field1.name, field2.name AS parent_name
FROM Tbl_Parent AS field1
LEFT JOIN Tbl_Parent AS field2 ON field1.parent_id = field2.id