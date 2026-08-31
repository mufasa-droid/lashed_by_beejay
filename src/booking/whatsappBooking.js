import { BUSINESS_CONFIG } from '../config/businessConfig';

/**
 * Generates a clean, professional WhatsApp booking message and opens the chat.
 * 
 * @param {Object} bookingDetails
 * @param {string} bookingDetails.serviceName - Name of the requested service
 * @param {string|number} bookingDetails.servicePrice - Price of the service
 * @param {string} bookingDetails.serviceDuration - Duration of service
 * @param {string} bookingDetails.preferredDate - Requested date (YYYY-MM-DD)
 * @param {string} bookingDetails.preferredTime - Requested time slot / window
 * @param {string} [bookingDetails.clientName] - Optional client name
 * @param {string} [bookingDetails.additionalNote] - Any special requests, nail art ideas, or removals needed
 */
export function openWhatsAppBooking({
  serviceName = "Custom Consultation / Manicure",
  servicePrice,
  serviceDuration,
  preferredDate,
  preferredTime,
  clientName,
  additionalNote
}) {
  const brand = BUSINESS_CONFIG.brandName;
  const number = BUSINESS_CONFIG.whatsappNumber;

  let message = `Hello! I would like to book a bespoke appointment with ${brand}.\n\n`;
  
  message += `✦ Service: ${serviceName}`;
  if (servicePrice || serviceDuration) {
    const priceStr = servicePrice ? `${BUSINESS_CONFIG.currency}${servicePrice}` : '';
    const durStr = serviceDuration ? `${serviceDuration}` : '';
    const details = [priceStr, durStr].filter(Boolean).join(' • ');
    if (details) message += ` (${details})`;
  }
  message += `\n`;

  if (preferredDate) {
    message += `✦ Preferred Date: ${preferredDate}\n`;
  }
  if (preferredTime) {
    message += `✦ Preferred Time: ${preferredTime}\n`;
  }
  if (clientName) {
    message += `✦ Name: ${clientName}\n`;
  }

  if (additionalNote && additionalNote.trim().length > 0) {
    message += `\n✦ Additional Notes / Removal Info:\n"${additionalNote.trim()}"\n`;
  }

  message += `\nPlease let me know your available slots. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`;

  // Open in new tab or native app
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  return whatsappUrl;
}
