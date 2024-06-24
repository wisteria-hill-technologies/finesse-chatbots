export const TextBoxExtension = {
  name: 'Textbox',
  type: 'response',
  match: ({ trace }) =>
    trace.type === 'ext_textbox' || trace.payload.name === 'ext_textbox',
  render: ({ trace, element }) => {
    const { address, google_map_url, email, phone, mobile } = trace.payload || {};

    const container = document.createElement('div');
    container.innerHTML = `
    <div style="padding:10px 0;">
        <h3 style="margin:0 0 10px;">Finesse Skin Clinic</h3>
        <p style="margin:10px 0;">Address: ${address} <a href="${google_map_url}" target="_blank">(map)</a></p>
        <p style="margin:10px 0;">Email: <a href="mailto:${email}" target="_blank">${email}</a></p>
        <p style="margin:10px 0;">Phone: <a href="tel:${phone}" target="_blank">${phone}</a></p>
        <p style="margin:10px 0;">Mobile: <a href="tel:${mobile}" target="_blank">${mobile}</a></p>
    </div>
    `

    element.appendChild(container)
  },
}
