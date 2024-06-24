export const TextBoxExtension = {
  name: 'Textbox',
  type: 'response',
  match: ({ trace }) =>
    trace.type === 'ext_textbox' || trace.payload.name === 'ext_textbox',
  render: ({ trace, element }) => {
    const { address, google_map_url, email, phone, mobile } = trace.payload || {};

    const container = document.createElement('div');
    container.innerHTML = `
    <div style="padding:0 10px;">
        <h3>Finesse Skin Clinic</h3>
        <p>Address: ${address} <a href="${google_map_url}" target="_blank">(map)</a></p>
        <p>Email: <a href="mailto:${email}" target="_blank">${email}</a></p>
        <p>Phone: <a href="tel:${phone}" target="_blank">${phone}</a></p>
        <p>Mobile: <a href="tel:${mobile}" target="_blank">${mobile}</a></p>
    </div>
    `

    element.appendChild(container)
  },
}
