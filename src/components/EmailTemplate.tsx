import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
  message,
}) => (
  <div>
    <h1>Новое сообщение от клиента</h1>
    <p><strong>Имя:</strong> {name}</p>
    <p><strong>Телефон:</strong> {phone}</p>
    <p><strong>Сообщение:</strong> {message}</p>
  </div>
);

