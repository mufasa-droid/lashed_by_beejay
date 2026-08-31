import { BUSINESS_CONFIG } from '../config/businessConfig';

/**
 * Generates the official WhatsApp booking message for Lashed by Beejay and opens the chat.
 * 
 * @param {Object} bookingDetails
 * @param {string} bookingDetails.serviceName - Name of the requested lash service
 * @param {string|number} bookingDetails.servicePrice - Price of the service (e.g. "12,000" or "25,000")
 * @param {string} bookingDetails.preferredDate - Requested date string
 * @param {string} bookingDetails.preferredTime - Requested time slot
 * @param {string} [bookingDetails.clientName] - Client name
 * @param {string} [bookingDetails.additionalNote] - Additional note or lash preferences
 */
export function openWhatsAppBooking({
  serviceName = "Custom Lash Consultation / Full Set",
  servicePrice,
  preferredDate,
  preferredTime,
  clientName,
  additionalNote
}) {
  const brand = BUSINESS_CONFIG.brandName;
  const number = BUSINESS_CONFIG.whatsappNumber;
  const currency = BUSINESS_CONFIG.currency;

  let message = `Hello! I'd like to book an appointment with ${brand}.\n\n`;
  
  message += `Service: ${serviceName}\n`;
  if (servicePrice) {
    message += `Price: ${currency}${servicePrice}\n`;
  }

  if (preferredDate) {
    message += `Preferred Date: ${preferredDate}\n`;
  }
  if (preferredTime) {
    message += `Preferred Time: ${preferredTime}\n`;
  }
  if (clientName && clientName.trim().length > 0) {
    message += `Client Name: ${clientName.trim()}\n`;
  }

  if (additionalNote && additionalNote.trim().length > 0) {
    message += `\nAdditional Note:\n"${additionalNote.trim()}"\n`;
  }

  message += `\nI understand that a ${currency}${BUSINESS_CONFIG.depositAmount} non-refundable deposit is required to secure my booking.\n\nPlease let me know the available slots.\n\nThank you!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`;

  // Open in new tab or native WhatsApp client
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  return whatsappUrl;
}
