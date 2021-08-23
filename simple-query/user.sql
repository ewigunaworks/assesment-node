select u.ID, u.UserName, p.UserName as 'ParentUserName' from `User` u
left join `User` p on u.Parent = p.ID
order by u.ID
