const BASE_URL = 'https://6464ad0d043c103502bfbfb2.mockapi.io/contacts';

export const fetchContacts = async () => {
  const response = await fetch(`${BASE_URL}`);
  return await response.json();
};

export const fetchPostContact = async contact => {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(contact),
  });

  return await response.json();
};

export const fetchDeleteContact = async id => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  });
  const data = await response.json();
  return data;
};
