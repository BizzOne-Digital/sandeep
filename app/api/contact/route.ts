import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import connectDB from '@/lib/mongodb';
import Booking from '@/models/Booking';

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendBookingEmails(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;
  squareFeet?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  preferredDate?: string;
  preferredTime?: string;
  frequency?: string;
  additionalServices?: string[];
  message?: string;
}) {
  const {
    name,
    email,
    phone,
    service,
    propertyType,
    bedrooms,
    bathrooms,
    squareFeet,
    address,
    city,
    postalCode,
    preferredDate,
    preferredTime,
    frequency,
    additionalServices,
    message,
  } = data;

  const smtpUser = process.env.SMTP_USER?.trim();
  // Gmail app passwords are often copied with spaces — strip them
  const smtpPassword = process.env.SMTP_PASSWORD?.replace(/\s+/g, '');

  if (!smtpUser || !smtpPassword) {
    throw new Error(
      'SMTP is not configured. Set SMTP_USER and SMTP_PASSWORD in .env.local'
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  // Verify credentials before sending (clearer errors)
  await transporter.verify();

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    service: escapeHtml(service),
    propertyType: escapeHtml(propertyType),
    bedrooms: escapeHtml(bedrooms),
    bathrooms: escapeHtml(bathrooms),
    squareFeet: escapeHtml(squareFeet),
    address: escapeHtml(address),
    city: escapeHtml(city),
    postalCode: escapeHtml(postalCode),
    preferredDate: escapeHtml(preferredDate),
    preferredTime: escapeHtml(preferredTime),
    frequency: escapeHtml(frequency),
    message: escapeHtml(message).replace(/\n/g, '<br>'),
  };

  const ownerEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #041E3A 0%, #2F8F2F 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; padding: 12px; background: white; border-left: 4px solid #2F8F2F; border-radius: 4px; }
          .field strong { color: #041E3A; display: inline-block; width: 150px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          .badge { display: inline-block; background: #2F8F2F; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Booking Request</h1>
            <p>B.Tech Eco Clean</p>
          </div>
          <div class="content">
            <h2 style="color: #041E3A; margin-bottom: 20px;">Client Information</h2>
            
            <div class="field">
              <strong>Name:</strong> ${safe.name}
            </div>
            
            <div class="field">
              <strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a>
            </div>
            
            <div class="field">
              <strong>Phone:</strong> <a href="tel:${safe.phone}">${safe.phone}</a>
            </div>
            
            <h2 style="color: #041E3A; margin: 30px 0 20px;">Service Details</h2>
            
            <div class="field">
              <strong>Service Type:</strong> ${safe.service}
              ${frequency ? `<span class="badge">${safe.frequency}</span>` : ''}
            </div>
            
            ${propertyType ? `
            <div class="field">
              <strong>Property Type:</strong> ${safe.propertyType}
            </div>
            ` : ''}
            
            ${bedrooms ? `
            <div class="field">
              <strong>Bedrooms:</strong> ${safe.bedrooms}
            </div>
            ` : ''}
            
            ${bathrooms ? `
            <div class="field">
              <strong>Bathrooms:</strong> ${safe.bathrooms}
            </div>
            ` : ''}
            
            ${squareFeet ? `
            <div class="field">
              <strong>Square Feet:</strong> ${safe.squareFeet}
            </div>
            ` : ''}
            
            ${address ? `
            <h2 style="color: #041E3A; margin: 30px 0 20px;">Property Address</h2>
            
            <div class="field">
              <strong>Address:</strong> ${safe.address}
            </div>
            
            <div class="field">
              <strong>City:</strong> ${city ? safe.city : 'Not provided'}
            </div>
            
            <div class="field">
              <strong>Postal Code:</strong> ${postalCode ? safe.postalCode : 'Not provided'}
            </div>
            ` : ''}
            
            ${preferredDate || preferredTime ? `
            <h2 style="color: #041E3A; margin: 30px 0 20px;">Scheduling</h2>
            
            ${preferredDate ? `
            <div class="field">
              <strong>Preferred Date:</strong> ${safe.preferredDate}
            </div>
            ` : ''}
            
            ${preferredTime ? `
            <div class="field">
              <strong>Preferred Time:</strong> ${safe.preferredTime}
            </div>
            ` : ''}
            ` : ''}
            
            ${additionalServices && additionalServices.length > 0 ? `
            <h2 style="color: #041E3A; margin: 30px 0 20px;">Additional Services</h2>
            
            <div class="field">
              ${additionalServices.map((s: string) => `<span class="badge">${escapeHtml(s)}</span>`).join(' ')}
            </div>
            ` : ''}
            
            ${message ? `
            <h2 style="color: #041E3A; margin: 30px 0 20px;">Additional Notes</h2>
            
            <div class="field">
              ${safe.message}
            </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <p>This booking request was submitted via btechecoclean.com</p>
            <p>Please respond to the client within 24 hours.</p>
          </div>
        </div>
      </body>
      </html>
    `;

  const clientEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2F8F2F 0%, #6F8E73 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .highlight { background: white; padding: 20px; border-left: 4px solid #2F8F2F; border-radius: 4px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          .contact-box { background: #041E3A; color: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Booking Request Received!</h1>
            <p>Thank you for choosing B.Tech Eco Clean</p>
          </div>
          <div class="content">
            <p>Hi ${safe.name},</p>
            
            <p>Thank you for your booking request! We've received your information and will review it shortly.</p>
            
            <div class="highlight">
              <strong style="color: #2F8F2F;">Your Requested Service:</strong><br>
              ${safe.service}${frequency ? ` - ${safe.frequency}` : ''}
            </div>
            
            <h2 style="color: #041E3A;">What Happens Next?</h2>
            <ol style="line-height: 2;">
              <li><strong>Review:</strong> Our team will review your booking request within 24 hours</li>
              <li><strong>Quote:</strong> We'll send you a detailed quote based on your requirements</li>
              <li><strong>Confirmation:</strong> Once approved, we'll confirm your appointment date and time</li>
              <li><strong>Preparation:</strong> We'll send you preparation tips before your cleaning</li>
            </ol>
            
            <div class="contact-box">
              <h3 style="margin-top: 0;">Need Immediate Assistance?</h3>
              <p style="margin-bottom: 10px;">Phone: <a href="tel:+14167105808" style="color: #6F8E73;">+1 416-710-5808</a></p>
              <p style="margin-bottom: 0;">Email: <a href="mailto:btechecoclean@gmail.com" style="color: #6F8E73;">btechecoclean@gmail.com</a></p>
            </div>
            
            <p style="margin-top: 30px;">We look forward to making your space spotless!</p>
            
            <p><strong>The B.Tech Eco Clean Team</strong><br>
            <em>Clean Spaces. Calmer Living.</em></p>
          </div>
          
          <div class="footer">
            <p>100% Eco-Friendly | Fully Insured | 5-Star Rated</p>
            <p style="font-size: 12px; color: #999;">
              Serving Edmonton, St. Albert, Sherwood Park, Leduc, and Spruce Grove
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

  const ownerTo =
    process.env.BOOKING_NOTIFICATION_EMAIL ||
    process.env.OWNER_EMAIL ||
    'btechecoclean@gmail.com';
  const rawFrom = process.env.SMTP_FROM?.trim();
  const fromAddress =
    rawFrom && !rawFrom.includes('your-gmail') ? rawFrom : smtpUser;

  await transporter.sendMail({
    from: `"B.Tech Eco Clean Bookings" <${fromAddress}>`,
    to: ownerTo,
    subject: `New Booking Request - ${service} - ${name}`,
    html: ownerEmailHTML,
    replyTo: email,
  });

  await transporter.sendMail({
    from: `"B.Tech Eco Clean" <${fromAddress}>`,
    to: email,
    subject: 'Booking Request Received - B.Tech Eco Clean',
    html: clientEmailHTML,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      service,
      propertyType,
      bedrooms,
      bathrooms,
      squareFeet,
      address,
      city,
      postalCode,
      preferredDate,
      preferredTime,
      frequency,
      additionalServices,
      message,
    } = body;

    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await connectDB();

    const booking = await Booking.create({
      name,
      email,
      phone,
      service,
      propertyType: propertyType || '',
      bedrooms: bedrooms ? String(bedrooms) : '',
      bathrooms: bathrooms ? String(bathrooms) : '',
      squareFeet: squareFeet || '',
      address: address || '',
      city: city || '',
      postalCode: postalCode || '',
      preferredDate: preferredDate || '',
      preferredTime: preferredTime || '',
      frequency: frequency || '',
      additionalServices: Array.isArray(additionalServices)
        ? additionalServices
        : [],
      message: message || '',
      status: 'new',
      emailSent: false,
    });

    let emailSent = false;
    try {
      await sendBookingEmails({
        name,
        email,
        phone,
        service,
        propertyType,
        bedrooms,
        bathrooms,
        squareFeet,
        address,
        city,
        postalCode,
        preferredDate,
        preferredTime,
        frequency,
        additionalServices,
        message,
      });
      emailSent = true;
      booking.emailSent = true;
      await booking.save();
    } catch (emailError) {
      console.error('Booking saved but email failed:', emailError);
    }

    return NextResponse.json(
      {
        message: 'Booking request sent successfully',
        bookingId: booking._id,
        emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}
