/* ==========================================================================
   NEXUS PC & TECH LAB - Interactive Quote Calculator (Professional)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
});

let currentDevice = 'laptop';
let currentIssue = 'slow';
let currentUrgency = 'standard';

function initCalculator() {
  const deviceOptions = document.querySelectorAll('.device-option');
  const issueChips = document.querySelectorAll('.issue-chip');
  const urgencyBtns = document.querySelectorAll('.urgency-btn');
  const whatsappBtn = document.getElementById('calcWhatsAppBtn');

  // Device selectors
  deviceOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      deviceOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      currentDevice = opt.getAttribute('data-device');
      updateCalculation();
    });
  });

  // Issue chips
  issueChips.forEach(chip => {
    chip.addEventListener('click', () => {
      issueChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentIssue = chip.getAttribute('data-issue');
      updateCalculation();
    });
  });

  // Urgency buttons
  urgencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      urgencyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentUrgency = btn.getAttribute('data-urgency');
      updateCalculation();
    });
  });

  // WhatsApp click handler
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', sendQuoteToWhatsApp);
  }

  // Initial calculation
  updateCalculation();
}

function updateCalculation() {
  const deviceData = REPAIR_DATA.devices[currentDevice] || REPAIR_DATA.devices.laptop;
  const issueData = REPAIR_DATA.issues[currentIssue] || REPAIR_DATA.issues.slow;
  const urgencyData = REPAIR_DATA.urgencies[currentUrgency] || REPAIR_DATA.urgencies.standard;

  // Base estimate formula
  const rawMin = Math.round((deviceData.baseCost + issueData.cost) * urgencyData.multiplier);
  const rawMax = Math.round(rawMin * 1.35);

  // Update elements
  const priceDisplay = document.getElementById('calcEstimatedPrice');
  const timeDisplay = document.getElementById('calcEstimatedTime');
  const deviceDisplay = document.getElementById('calcDeviceDisplay');
  const issueDescDisplay = document.getElementById('calcIssueDesc');
  const urgencyDisplay = document.getElementById('calcUrgencyDisplay');

  if (priceDisplay) {
    priceDisplay.textContent = `$${rawMin} - $${rawMax}`;
  }

  if (timeDisplay) {
    timeDisplay.textContent = currentUrgency === 'express' ? `Express: ${issueData.time}` : issueData.time;
  }

  if (deviceDisplay) {
    deviceDisplay.textContent = deviceData.name;
  }

  if (issueDescDisplay) {
    issueDescDisplay.textContent = issueData.desc;
  }

  if (urgencyDisplay) {
    urgencyDisplay.textContent = urgencyData.label;
  }
}

function sendQuoteToWhatsApp() {
  const deviceData = REPAIR_DATA.devices[currentDevice];
  const issueData = REPAIR_DATA.issues[currentIssue];
  const urgencyData = REPAIR_DATA.urgencies[currentUrgency];
  const rawMin = Math.round((deviceData.baseCost + issueData.cost) * urgencyData.multiplier);
  const rawMax = Math.round(rawMin * 1.35);

  const phone = "593999999999";
  const message = `Estimados NEXUS PC, deseo solicitar cotización técnica para mi equipo:%0A%0A` +
    `*Equipo:* ${encodeURIComponent(deviceData.name)}%0A` +
    `*Requerimiento:* ${encodeURIComponent(issueData.label)}%0A` +
    `*Modalidad:* ${encodeURIComponent(urgencyData.label)}%0A` +
    `*Presupuesto Estimado Web:* $${rawMin} - $${rawMax} USD%0A%0A` +
    `Agradezco me confirmen disponibilidad de recepción en taller o servicio de retiro. Muchas gracias.`;

  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}
