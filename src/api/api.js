const PROJECT_TOKEN = '65410a7845bedb25bfc32024';

export async function fetchContacts() {
  try {
    const res = await fetch(
      `https://${PROJECT_TOKEN}.mockapi.io/api/contacts`,
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchNewContact(newContact) {
  const res = await fetch(`https://${PROJECT_TOKEN}.mockapi.io/api/contacts`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newContact),
  });
  const data = await res.json();
  return data;
}

export async function fetchDeleteContact(id) {
  const res = await fetch(
    `https://${PROJECT_TOKEN}.mockapi.io/api/contacts/${id}`,
    {
      method: 'DELETE',
    }
  );
  const data = res.json();
  return data;
}
