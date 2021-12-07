const info = new userInfo();

async function getInfo() {
	let x = info.timeOpened;
	let y = info.timezone;
	document.body.insertAdjacentHTML('beforeEnd', `<p>Time opened: ${x}</p>`);
	document.body.insertAdjacentHTML('beforeEnd', `<p>Time zone: ${y}</p>`);

	x = info.pageon();
	document.body.insertAdjacentHTML('beforeEnd', `<p>File location: ${x}</p>`);

	x = info.referrer();
	document.body.insertAdjacentHTML('beforeEnd', `<p>The URI of the page that linked to this page: ${x}</p>`);

	x = info.browserInfo();
	document.body.insertAdjacentHTML('beforeEnd', `<p>Some info from the browser:</p>`);
	document.body.insertAdjacentHTML('beforeEnd', ` <ul>
														<li>cookieEnabled: ${x.cookieEnabled}
														<li>language: ${x.language}
														<li>languages: ${x.languages}
														<li>deviceMemory: ${x.deviceMemory}
														<li>hardwareConcurrency: ${x.hardwareConcurrency}
														<li>userAgent: ${x.userAgent}
													</ul<`);
	
	x = info.dataCookies();
	document.body.insertAdjacentHTML('beforeEnd', `<p>Cookies: ${x}</p>`);

	x = info.dataStorage();
	document.body.insertAdjacentHTML('beforeEnd', `<p>Local storage items: ${x.length}</p>`);

	x = info.sizeScreen();
	document.body.insertAdjacentHTML('beforeEnd', `<p>Screen width: ${x.width}</p>`);
	document.body.insertAdjacentHTML('beforeEnd', `<p>Screen height: ${x.height}</p>`);

	x = await info.position();
	document.body.insertAdjacentHTML('beforeEnd', `<p>Longitude: ${x.long}</p>`);
	document.body.insertAdjacentHTML('beforeEnd', `<p>Latitude: ${x.lat}</p>`);
	document.body.insertAdjacentHTML('beforeEnd', `<p>Accuracy: ${x.accuracy}</p>`);
	document.body.insertAdjacentHTML('beforeEnd', `<p>Speed: ${x.speed}</p>`);

	x = await info.battery();
	document.body.insertAdjacentHTML('beforeEnd', `<p><b>Battery:</b></p>`);
	document.body.insertAdjacentHTML('beforeEnd', `<p>charging - ${x.charging}</p>`);
	document.body.insertAdjacentHTML('beforeEnd', `<p>charging time - ${x.chargingTime}</p>`);
	document.body.insertAdjacentHTML('beforeEnd', `<p>level - ${x.level}</p>`);

	x = await info.ip();
	document.body.insertAdjacentHTML('beforeEnd', `<p>IP address: ${x.ipAddress} (city: ${x.city}, continent: ${x.continentName}, country code: ${x.countryCode}, country: ${x.countryName})</p>`);
}

getInfo();