import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to business owner
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
            <h1>🎉 New Booking Request</h1>
            <p>B.Tech Eco Clean</p>
          </div>
          <div class="content">
            <h2 style="color: #041E3A; margin-bottom: 20px;">Client Information</h2>
            
            <div class="field">
              <strong>Name:</strong> ${name}
            </div>
            
            <div class="field">
              <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
            </div>
            
            <div class="field">
              <strong>Phone:</strong> <a href="tel:${phone}">${phone}</a>
            </div>
            
            <h2 style="color: #041E3A; margin: 30px 0 20px;">Service Details</h2>
            
            <div class="field">
              <strong>Service Type:</strong> ${service}
              ${frequency ? `<span class="badge">${frequency}</span>` : ''}
            </div>
            
            ${propertyType ? `
            <div class="field">
              <strong>Property Type:</strong> ${propertyType}
            </div>
            ` : ''}
            
            ${bedrooms ? `
            <div class="field">
              <strong>Bedrooms:</strong> ${bedrooms}
            </div>
            ` : ''}
            
            ${bathrooms ? `
            <div class="field">
              <strong>Bathrooms:</strong> ${bathrooms}
            </div>
            ` : ''}
            
            ${squareFeet ? `
            <div class="field">
              <strong>Square Feet:</strong> ${squareFeet}
            </div>
            ` : ''}
            
            ${address ? `
            <h2 style="color: #041E3A; margin: 30px 0 20px;">Property Address</h2>
            
            <div class="field">
              <strong>Address:</strong> ${address}
            </div>
            
            <div class="field">
              <strong>City:</strong> ${city || 'Not provided'}
            </div>
            
            <div class="field">
              <strong>Postal Code:</strong> ${postalCode || 'Not provided'}
            </div>
            ` : ''}
            
            ${preferredDate || preferredTime ? `
            <h2 style="color: #041E3A; margin: 30px 0 20px;">Scheduling</h2>
            
            ${preferredDate ? `
            <div class="field">
              <strong>Preferred Date:</strong> ${preferredDate}
            </div>
            ` : ''}
            
            ${preferredTime ? `
            <div class="field">
              <strong>Preferred Time:</strong> ${preferredTime}
            </div>
            ` : ''}
            ` : ''}
            
            ${additionalServices && additionalServices.length > 0 ? `
            <h2 style="color: #041E3A; margin: 30px 0 20px;">Additional Services</h2>
            
            <div class="field">
              ${additionalServices.map((service: string) => `<span class="badge">${service}</span>`).join(' ')}
            </div>
            ` : ''}
            
            ${message ? `
            <h2 style="color: #041E3A; margin: 30px 0 20px;">Additional Notes</h2>
            
            <div class="field">
              ${message.replace(/\n/g, '<br>')}
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

    // Confirmation email to client
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
          .button { display: inline-block; background: #2F8F2F; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; margin-top: 20px; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          .contact-box { background: #041E3A; color: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Booking Request Received!</h1>
            <p>Thank you for choosing B.Tech Eco Clean</p>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            
            <p>Thank you for your booking request! We've received your information and will review it shortly.</p>
            
            <div class="highlight">
              <strong style="color: #2F8F2F;">📋 Your Requested Service:</strong><br>
              ${service}${frequency ? ` - ${frequency}` : ''}
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
              <p style="margin-bottom: 10px;">📞 <strong>Phone:</strong> <a href="tel:+14167105808" style="color: #6F8E73;">+1 416-710-5808</a></p>
              <p style="margin-bottom: 0;">📧 <strong>Email:</strong> <a href="mailto:benipalsandeep03@gmail.com" style="color: #6F8E73;">benipalsandeep03@gmail.com</a></p>
            </div>
            
            <p style="margin-top: 30px;">We look forward to making your space spotless!</p>
            
            <p><strong>The B.Tech Eco Clean Team</strong><br>
            <em>Clean Spaces. Calmer Living.</em></p>
          </div>
          
          <div class="footer">
            <p>🌿 100% Eco-Friendly | 🛡️ Fully Insured | ⭐ 5-Star Rated</p>
            <p style="font-size: 12px; color: #999;">
              Serving Toronto, Mississauga, Brampton, Oakville, and Vaughan
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to business owner
    await transporter.sendMail({
      from: `"B.Tech Eco Clean Bookings" <${process.env.SMTP_USER}>`,
      to: process.env.OWNER_EMAIL || 'benipalsandeep03@gmail.com',
      subject: `🎉 New Booking Request - ${service} - ${name}`,
      html: ownerEmailHTML,
      replyTo: email,
    });

    // Send confirmation email to client
    await transporter.sendMail({
      from: `"B.Tech Eco Clean" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '✅ Booking Request Received - B.Tech Eco Clean',
      html: clientEmailHTML,
    });

    return NextResponse.json(
      { message: 'Booking request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}
