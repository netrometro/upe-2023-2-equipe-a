import React from 'react';
import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const QuestaoPDF = () => {
  const [destinatario, setDestinatario] = useState('');
  const [corpo, setCorpo] = useState('');

  const handleSendEmail = async () => {
    const doc = new jsPDF();
    doc.text(20, 20, 'Destinatário: ' + destinatario);
    doc.text(20, 30, 'Corpo do e-mail: ' + corpo);
    doc.save('email.pdf');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Destinatário"
        value={destinatario}
        onChange={(e) => setDestinatario(e.target.value)}
      />
      <textarea
        placeholder="Corpo do e-mail"
        value={corpo}
        onChange={(e) => setCorpo(e.target.value)}
      />
      <button onClick={handleSendEmail}>Gerar PDF</button>
    </div>
  );
};
