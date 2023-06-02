import React from 'react';
import { AnimatedLetters } from 'components';
import { useRef } from 'react';
//import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Contacts.scss';
import { useAnimated } from 'hooks/useAnimated';

const Contacts = () => {
	const { letterClass } = useAnimated();

	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();
		setTimeout(() => {
			alert('Message successfully sent!');
			window.location.reload(false);
		}, 100);
		//emailjs
		//	.sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
		//	.then(
		//		() => {
		//			alert('Message successfully sent!');
		//			window.location.reload(false);
		//		},
		//		() => {
		//			alert('Failed to send the message, please try again');
		//		}
		//	);
	};

	return (
		<>
			<div className="container contact-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={[...'Contact me']}
							idx={15}
						/>
					</h1>
					<p>
						I am interested in freelance opportunities - especially on ambitious
						or large projects. However, if you have any other requests or
						questions, don't hesitate to contact me using below form either.
					</p>
					<div className="contact-form">
						<form ref={form} onSubmit={sendEmail}>
							<ul>
								<li className="half">
									<input placeholder="Name" type="text" name="name" required />
								</li>
								<li className="half">
									<input
										placeholder="Email"
										type="email"
										name="email"
										required
									/>
								</li>
								<li>
									<input
										placeholder="Subject"
										type="text"
										name="subject"
										required
									/>
								</li>
								<li>
									<textarea
										placeholder="Message"
										name="message"
										required
									></textarea>
								</li>
								<li>
									<input type="submit" className="flat-button" value="SEND" />
								</li>
							</ul>
						</form>
					</div>
				</div>
				<div className="info-map">
					Ivan Sumenko
					<br />
					Ukraine,
					<br />
					Sumskaya Street, 19 <br />
					Kharkiv <br />
					<br />
					<a className="contacts-mail-link" href="mailto:livansll96@gmail.com">
						livansll96@gmail.com
					</a>
				</div>
				<div className="map-wrap">
					<MapContainer center={[49.9935, 36.2304]} zoom={13}>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
						<Marker position={[49.9935, 36.2304]}>
							<Popup>i'm lives here, come over for a cup of coffee :)</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<Loader type="pacman" />
		</>
	);
};

export default Contacts;
