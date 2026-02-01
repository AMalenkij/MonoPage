import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  phone: string;
  message: string;
}

export function EmailTemplate({
  name,
  phone,
  message,
}: Readonly<EmailTemplateProps>) {
  return (
    <div>
      <h1>Новое сообщение от клиента</h1>
      <p><strong>Имя:</strong> {name}</p>
      <p><strong>Телефон:</strong> {phone}</p>
      <p><strong>Сообщение:</strong> {message}</p>
    </div>
  );
}

