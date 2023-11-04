const PROJECT_TOKEN = '65410a7845bedb25bfc32024';

export async function fetchContacts() {
  const res = await fetch(`https://${PROJECT_TOKEN}.mockapi.io/api/contacts`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  return res;
}

export async function fetchNewContact(newContact) {
  const res = await fetch(`https://${PROJECT_TOKEN}.mockapi.io/api/contacts`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newContact),
  });
  return res;
}

export async function fetchDeleteContact(id) {
  const res = await fetch(
    `https://${PROJECT_TOKEN}.mockapi.io/api/contacts/${id}`,
    {
      method: 'DELETE',
    }
  );
  return res;
}
