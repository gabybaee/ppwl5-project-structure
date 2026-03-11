export const userView = (users: any[]) => `
<html>
<head>
<title>User Management</title>
<link rel="stylesheet" href="/css/style.css">
</head>

<body class="bg-gray-200 font-sans">

<div class="max-w-2xl mx-auto mt-10">

<h1 class="text-2xl font-bold text-blue-600 mb-4">
User Management (Clean Structure)
</h1>

<form action="/create" method="post" class="flex gap-2 mb-6">
<input name="name" placeholder="Name"
class="border px-3 py-2 rounded w-full"/>

<input name="role" placeholder="Role"
class="border px-3 py-2 rounded w-full"/>

<button class="bg-blue-500 text-white px-4 rounded">
Add
</button>
</form>

<div class="space-y-3">

${users.map(u => `
<div class="flex justify-between items-center bg-white p-3 rounded shadow">

<span>
${u.name} (${u.role})
</span>

<form action="/delete/${u.id}" method="post">
<button class="bg-red-500 text-white px-3 py-1 rounded">
Delete
</button>
</form>

</div>
`).join("")}

</div>

</div>

</body>
</html>
`