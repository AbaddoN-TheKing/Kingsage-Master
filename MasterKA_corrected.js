// ==UserScript==
// @name    MasterKA
// @author  gracul
// @version 1.8.7 - flaga fix
// @include https://*.kingsage.gameforge.com/?*
// @include https://*.kingsage.gameforge.com/error.php*
// @include https://*.kingsage.gameforge.com/
// @include https://*.kingsage.gameforge.com/?*
// @exclude https://forum.kingsage.gameforge.com/
// @noframes
// @grant   none
// ==/UserScript==
`use strict`;
!(function (e) {
	var t = {};
	function a(i) {
		if (t[i]) return t[i].exports;
		var n = (t[i] = { i: i, l: !1, exports: {} });
		return e[i].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
	}
	(a.m = e),
		(a.c = t),
		(a.d = function (e, t, i) {
			a.o(e, t) ||
				Object.defineProperty(e, t, { enumerable: !0, get: i });
		}),
		(a.r = function (e) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module",
				}),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(a.t = function (e, t) {
			if ((1 & t && (e = a(e)), 8 & t)) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var i = Object.create(null);
			if (
				(a.r(i),
				Object.defineProperty(i, "default", {
					enumerable: !0,
					value: e,
				}),
				2 & t && "string" != typeof e)
			)
				for (var n in e)
					a.d(
						i,
						n,
						function (t) {
							return e[t];
						}.bind(null, n)
					);
			return i;
		}),
		(a.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return a.d(t, "a", t), t;
		}),
		(a.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(a.p = ""),
		a((a.s = 13));
})([
	function (e, t) {
		e.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4wEXFAwO/IjsvQAAAeJJREFUOMuFkzFoFEEUhr+3M7PZSVxQMY1FkFjYWEjAQmwszjS5wipqIwjRyguWR6JNQA1CkkZRUCQoHBiDirW9jY2ChWiXPiK3urt3uX0W2cNN9JLXzJv/n3/em/8xUquds+wT1obGuaEGcBEIgM+qupBlyca+YueiyBj7BqhV4AkRqUXRyFkzPn4sGCQOQz9krXstIudL6BGwDpwBjojIsN1LbIx926+sqjezLHkI4H1sgLvA6YEXBEFwSFUXRHgP/Miy5FmFPlWuif3XMBc4F80Cl4ER4JOqzvd57+MVYHp7p6/srrZDY+waMFWBT4jIKDDpfbwM3Cjx1TRNHtuK284Y+7IifgL6DWQK9I738RLQKLnnef77OuVMCcPIWevWgHrZWhP0HchBVW2CTAOzFfFMUfQUwBrjxBjX+itmPk2TJe/jn8CwiMxVnvMiz9NrfTFAEIZRA7hQVr6dpu37ZX4L2CzPtYF725W3ih2mA5fK/GmaJot9QpVN0EnV4ntRFJ1uN+v+d9yAKfOvfTCKDiyKyKqIfAwC86AotnoD/wnwBZgAmt7HApwErpR8q9PJZnq9nW1XQ+r1+nER+QCM7uJanU56dS8xgBkbO9q2NlwXkcPAFrABLOf5r7mq24PiD+B3pjTKJcP8AAAAAElFTkSuQmCC";
	},
	function (e, t) {
		e.exports =
			"data:audio/ogg;base64,T2dnUwACAAAAAAAAAADx0sJhAAAAAO8C8aUBHgF2b3JiaXMAAAAAARErAAD/////4C4AAP////+ZAU9nZ1MAAAAAAAAAAAAA8dLCYQEAAACRfVvaCkD//////////5ADdm9yYmlzDQAAAExhdmY1OC4yNi4xMDABAAAAHwAAAGVuY29kZXI9TGF2YzU4LjQ0LjEwMCBsaWJ2b3JiaXMBBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7um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";
	},
	function (e, t) {
		e.exports =
			"data:audio/ogg;base64,T2dnUwACAAAAAAAAAAAoPi1eAAAAAGP+k6QBHgF2b3JiaXMAAAAAARErAAD/////4C4AAP////+ZAU9nZ1MAAAAAAAAAAAAAKD4tXgEAAACAJHD3CkD//////////5ADdm9yYmlzDQAAAExhdmY1OC4yNi4xMDABAAAAHwAAAGVuY29kZXI9TGF2YzU4LjQ0LjEwMCBsaWJ2b3JiaXMBBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7um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";
	},
	function (e, t) {
		e.exports =
			"data:audio/ogg;base64,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";
	},
	function (e, t) {
		e.exports =
			"data:audio/ogg;base64,T2dnUwACAAAAAAAAAABsIznyAAAAAJNfhK8BHgF2b3JiaXMAAAAAARErAAD/////4C4AAP////+ZAU9nZ1MAAAAAAAAAAAAAbCM58gEAAABqgs6lCkD//////////5ADdm9yYmlzDQAAAExhdmY1OC4yNi4xMDABAAAAHwAAAGVuY29kZXI9TGF2YzU4LjQ0LjEwMCBsaWJ2b3JiaXMBBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7um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";
	},
	function (e, t) {
		e.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAGNJREFUOE/dzNEJwCAMRVEzrNM5TEfoIH4oKaQk8SlF21L6cRGeesKWYrmjA8p7WspARGTyj0c1kFx8F+JTJ/e+S5Bso56DdL0NZSAU+ozwachv70EohnS8TUN++wmEOqH1Yqm0/9jO2uBb3QAAAABJRU5ErkJggg==";
	},
	function (e, t) {
		e.exports =
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAnCAYAAADzckPEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACLhJREFUeNqcWNtvHUcZ/2Zn9nIu9rFjhzjOjTokRFA1NFGhIB4RCFQkJKBQHooEAgkhob7wD/QdJB545AGeEEIIIS4qEgjyUB6qpgkJUhNCHdvxJTn3c/ac3Z3ZmeE363OstXNpnZU/7dndme/33b9vzH7+akBPcbEDdPAyIDuhhy7xFGDeAZq+oxKQngCbkgCHBmUl5nyyj0/IK2lrJyAONJ/cp2QPA8pKAD4oKJEoCWRLAA4wA8mSMPr9QMtmFBOwEBSBKqBqt8tPDPr+i1Z7y9ayRUhkPObJwGerNkj/emxJ3i75V5cEewi0bMKpVntAoJqxNLu2Hnwxl+KzM5G5Hs7IO1HVvJlJS8wK2+vxs3YQvt7xvNfrR9IbgSA14bmnqXcAdKqZA5kFLYKWQKcBtgI6d3vD+/pgYF88tphcCYTKdUxns7E9H1bsvF9VwdHl9IYf2Dv3W+w7WW4rqSK/N7a8HOXiMYAzoHnQgtF0tLvJn2WpOIl9R0yXf/oMD5Mzm0vfW/Lqs1meU7udqA3Z2hktda7EjHlpkp+t1OUvZU71RNoMNnXaqomp90DZ5Hc0ATwKOv7gVu2ljzQuvnShO16OiHmcecSxggc+sSikrNej0MLeXuAfD5ZOvbsWfetabev6sZXkj0FAA1hmHp9T8ErbsVULdVakkChFp/NhVRtaYIxONK/VXv3KCy9/zd/YpJEaFGI2oVUnV5RCfQ/iV2qVYkODCwo9j87VG6yfjE6lugN32BFAJXglGsChz+Qkqq1XMm2Ya5qBZIvjmFYuhCtf4Lf/R927a9Qzhq6OYrqZxAAGKOd09BMX6at/e4OSMKRtmdEQ4D6AnwuPLxy7dfqb+ubct2WLP+8xWgwF1YVXRD+nUp4J2N+ZdjYZstPV1vkfnK8emRm02jQGwDVI4aSKoNFCEEJLS5e//13yABJAY4730hoKjEcVrD9fmwtOm9kLd+71frSltnozJ3QLMvXBYuzw9jTFy1BC0+RO45XPnXzuo7LTJQX7bMiULEAiACwInwRE5HhunF2hDGsqkDkSggS+G0fOfhAk8jidqTaqdrv6ZbBBFFs/TnezpShhraHlY2mDcWZr3PqL6b0tUvCfc0CsNc2D6bzv79Y+cAjwHDQalOzsIPtyYnCcB3CnOTnCs0YdUNA+52aEtBGZIm8kbZE24uoaAqHCPKwrqk5e6/67y9nFihDMAjgAE+crHwscc8520+3eX96gjd/8tnhmEGT6zXCPpFI0hjC3klZXLo/fRB5z7ZZg32bXMrHTsxamdY51ggoRql5TJWpFiIAjSmehVYpA4hNtCvNg4e2f/ow8B+ZMVQAinXxBGqDteEg39HanfWzw98TYUTawdozY5Wy3FIrtnp3uY1jPQmZNbFLtR7MUKEkf8gNq4u6KZgEMWnnlG7TwqRfondd+PDEtTFSNyIPJ83abttRA7yz11weZlSOUfbiORsjWHMohkllh3kvYhqAzeGFDwbJ/pLf+y/jJjy+LKq/iw3FEbIrocHo5kGCuQbXTp2AWBJDgFNTqxOYbNHrQJJ1lyI3AGw5I9OHYOLMWAWSHqTX9BArhd9EPYZlQaapnis1lOR0dirx6h/XEqupFlHmiISIWAVw4M8K0g3eu0fbvfl+AEkCdSROkl0kSmItTX2bsP6a/1ZNmEyCbw8xu90a2A61dyuQuIG1/bLWOmEo9myGJR4mkOAnMMA7TYTu4xzvjNLwcLSHDBSTELgTBOJM0yDPSeK57gqpwg/M1AOmabA27gXYgA5h2iMhN4FO5r/bio0bZkgFnMQTvI8Q7yKuuzNlMFprwX2GL3U1jf9nOsDkUgoFRtEYxmSOwVQ7tU06zw4qNjDCrNo63/WwVPJvg0YQfO6h0w0lDL9JYTEcMaJdqYYdMUQtBuA3ABiSJsEFAM5uIcXVNp3CfNQzOHY0Y8+EnZYzNrSblSSUNyrShthrbB3DTFvZu497OjY0nk0TRU3l5/oHVXIVz+c/NbtQU04P7Dcd7KOzhyBiZ5jYXKNte7vxnxhBYppLGibI9WOl+omgd1e09lNY15Oc2wHvQOHGgmD4tdyPon6/vNXWntgUI/kjDf9bzXJq4ymYNKves1CyNlRmnyL8G92EUT3Uz3QII3EFNp6F0oLm9Cyab8GcL7wvzAmtfP7WTtuOk6dJu/XTABgGb45652MGCWaRQ0M7yHbdkQ2dbH5uprrjWtR7LdWzoYN8O7vdA91VOXWg4nra0g5PDdFrLpj7GptznmHo8cqQ4Z2ngsWc47IwFa1hlAJa9N0rXn52rfWaU67c6mV6FkA9AWxYaIsaGU186s+4DdS9++CtZnsrd77waEq8GxAXsi6jOa76XDpXuIgBWUccM7lliTNJMM3N5sX7prfbgSlKY2DZRvXqIvzHyf29MeWgwc8ATm09n1hEaQb8Wsnbo0/1IUBN5Gklr33X13nU9dwdt7Ej5B8g6PlePnp+r0oO5CuvMRBSjuqUHB+1Hzr0TM+hf/DNH9cGQ4FEMAH+lVr2EeKKeyt/GAvSAok/kMEKqOct3lPzJQuB/ODQ0gKBxo0oJYl9hEtxn2idO+MfnGOqWRYqh7KJmo/w1+0r/Osnt/VxbBbNpoOa7SW/N+jBrbfPsJuZcV2CymYjl0Na89vnAfuAD1J+ua/vJFc+4auXM/XYSX0Xg3AagBaBEPhp0PBfhChHKUH1cCVYYwLTwrGseBs3EfukiP9yprTm0ZqKNY+zaqisUBskuIYDJ3GiAIEFqeBkiHaBFV+FFfj+e7xNBB0kxHoH/LjBAE0SkSxUJ4CL3lC6CBBCW+Wg4Su/PyUODYkCeRrMEQ1ZopfemdV1KsaJFOj+Xzqb2qUBLRcMFDpXOnPkB5tNzqnnUefSwoKZ02jIlxvmBI74uHZDKJ/BHXo919yS3bEkzVTroHjxlT7/vs8DB/CyfRw/7Dw174J8Y9hF87Psx/aD/c6DDMH7S9X8BBgDPaTGUhuLtHgAAAABJRU5ErkJggg==";
	},
	function (e, t) {
		e.exports =
			"data:audio/ogg;base64,T2dnUwACAAAAAAAAAAB15TXEAAAAAFPFJxEBHgF2b3JiaXMAAAAAARErAAD/////4C4AAP////+ZAU9nZ1MAAAAAAAAAAAAAdeU1xAEAAAAgAmgjCkD//////////5ADdm9yYmlzDQAAAExhdmY1OC4yNi4xMDABAAAAHwAAAGVuY29kZXI9TGF2YzU4LjQ0LjEwMCBsaWJ2b3JiaXMBBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADgAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEkBwAAAAAAAB15TXEAgAAAPidFxceKDAwLi4vMCwxLzEoLyUpLS80LzMxMTAwMC4mIyQNilDDPpTEtAQa63NKiJepzRYjnP3eVsScAPzjRsL//MTxCf5/OEttBo5Xey6GFFac89L/P74NIwf1duTxHvRmsB0PzpG5x7YrobeA5c14+G0zOigFgL7yAJpbe9KGKQn2x7UL/32Ux7cD84Osa31c06GuvP30KCcd0eG/sQHMZlBzQAE0vhzdAp5hl6adp0gApmO2Ok0nD1vas6J0QOnG/LBODROYNyfjPlde3YWvMd4GdHjGtASeYVWwMtIAn0JhTOMSVy0+fXu9bAXs/fndkASgnURpy0BSO71L+1BWPQRul0UBomGl1EHS4mnQGmO5X0Qxvrcxrqq1oHTtlceNMXDuSgW6wcmglUaxtuLYGCh0+QCiYZS6g4rgCQqF8Z7DvXT9j/7QioBjI/viKE2zZfuhnS+UwYOOkaelkFvvPZgTgX2m4QWwDs54DUZh+B4dZ31KXXoCR0rL+2p76yA3mMNzSRaTm/y6NgZPB7pVAKpee/Q2Pur0AAkK45716lTL2jHUjYwaLAksqZozIuzhC1wwz4xcvmbyAdXCQzJ6swGioFHP7jQhIQBTGOW3eozR33rOkNXdnuLMyPQjdFWNd3uFb94zZy/SKef1B6/oJJJkGVIZWllVAFpLoN+o+QbxT/5Txsi6NZzQJ59c50OLnmBqRcmKo+FOd45a902NqCWeJzeVd9ABrQS5BOyMGez7HiSBzf2tzvEqAFxb7TBb0tdH4NO+IXkAoucjQR6sBW/KQ24E/xJue0uog7175zWmaZpi0LYArC7g1cdap+nU+GUaVP52UAOm5h3NPFA64e0wugQQ9wL2B84C9u5/EoYAMuYzRL8Ey2G1s+AjnucDqXmgCB6QYysZAXv+BF3PwZxXribq/U0AQI/15hN3UYDWokQ/egei5c0lc+EDANAEwDWGrXed2+k5VFUGep9bZHRHv1pPCgDNC23bBoD0RPKBx1KyY77XIxsAEJPA8budqpzhfv59ep5CoofifyrtlDOAb6DTrgrAIJ2bc8PBD5icApqoBx3iTQCgmSTxOd+U9zHGPeXnU4XUlG56ffXsIsxjtQYuAN2uX+ts8gg8GH8cxtFdFwCGqBHhQjNJHlROlXl1VvnyJtLdNIeMBIuwEizYIrUjwLAZNSiEEoLxQ0ErS6w/dIYpxZSBWywCiknI2jH2usZ7Xv+I0tq8zi25RJH85IexRTMoMSXPaUxxqZoLKZfXZxvJCoKqcYdCMQk7PKqrx8U/Pni5PNxHutjcul4/PguxFhvTu/lC/Q/FpEv9Yoky3cBf7AKGqMJ3VUzCEDtc9H0F81y4PB6Tome7XtU6v9JGt24fGuV4R3F2R6PWSpLby1P3q8ABfmaJRhlAEFBMkhhye/dT1T8ldqGW79LBW56UVJ7wTqet0uBpnbZnQ6q+G9mNdWYKhmNNbRUKLUlMU2R0/mz656wPJ5940QPVy0M+CKVROBRIVL81n9QrvVT+yXtNRxcBguGgOaqKSRKih6nuA68Xo8PA0XtB1UyP0svqBZS+kk1pwFSK/xyLonfQsXjlpgEEhtjlNlUoJuF2wfi7d5tnVy8P9bBfNvOqfnNYrQoHfAE0fbXKf+26vAyt3a8eBoZSCmtSRRiy9LBkOoUJDAZqe5te5aBaStXrgZqBEtjVJuXVjDIBhhGPhjTDAssmVhhHSp3aLZ1oNSjHaejenDsE+9EZqnvbJgCGEI+GtJaAlyY8gwWRd1eJLk4RzaqntO/aC5QQyCN1FKi5mBSGDY8GCMOAJAA3ATwF";
	},
	function (e, t, a) {
		var i = a(9),
			n = a(10);
		"string" == typeof (n = n.__esModule ? n.default : n) &&
			(n = [[e.i, n, ""]]);
		var s = { insert: "head", singleton: !1 },
			r = (i(n, s), n.locals ? n.locals : {});
		e.exports = r;
	},
	function (e, t, a) {
		"use strict";
		var i,
			n = function () {
				return (
					void 0 === i &&
						(i = Boolean(
							window && document && document.all && !window.atob
						)),
					i
				);
			},
			s = (function () {
				var e = {};
				return function (t) {
					if (void 0 === e[t]) {
						var a = document.querySelector(t);
						if (
							window.HTMLIFrameElement &&
							a instanceof window.HTMLIFrameElement
						)
							try {
								a = a.contentDocument.head;
							} catch (e) {
								a = null;
							}
						e[t] = a;
					}
					return e[t];
				};
			})(),
			r = [];
		function o(e) {
			for (var t = -1, a = 0; a < r.length; a++)
				if (r[a].identifier === e) {
					t = a;
					break;
				}
			return t;
		}
		function l(e, t) {
			for (var a = {}, i = [], n = 0; n < e.length; n++) {
				var s = e[n],
					l = t.base ? s[0] + t.base : s[0],
					c = a[l] || 0,
					d = "".concat(l, " ").concat(c);
				a[l] = c + 1;
				var p = o(d),
					u = { css: s[1], media: s[2], sourceMap: s[3] };
				-1 !== p
					? (r[p].references++, r[p].updater(u))
					: r.push({
							identifier: d,
							updater: y(u, t),
							references: 1,
					  }),
					i.push(d);
			}
			return i;
		}
		function c(e) {
			var t = document.createElement("style"),
				i = e.attributes || {};
			if (void 0 === i.nonce) {
				var n = a.nc;
				n && (i.nonce = n);
			}
			if (
				(Object.keys(i).forEach(function (e) {
					t.setAttribute(e, i[e]);
				}),
				"function" == typeof e.insert)
			)
				e.insert(t);
			else {
				var r = s(e.insert || "head");
				if (!r)
					throw new Error(
						"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
					);
				r.appendChild(t);
			}
			return t;
		}
		var d,
			p =
				((d = []),
				function (e, t) {
					return (d[e] = t), d.filter(Boolean).join("\n");
				});
		function u(e, t, a, i) {
			var n = a
				? ""
				: i.media
				? "@media ".concat(i.media, " {").concat(i.css, "}")
				: i.css;
			if (e.styleSheet) e.styleSheet.cssText = p(t, n);
			else {
				var s = document.createTextNode(n),
					r = e.childNodes;
				r[t] && e.removeChild(r[t]),
					r.length ? e.insertBefore(s, r[t]) : e.appendChild(s);
			}
		}
		function m(e, t, a) {
			var i = a.css,
				n = a.media,
				s = a.sourceMap;
			if (
				(n ? e.setAttribute("media", n) : e.removeAttribute("media"),
				s &&
					btoa &&
					(i +=
						"\n/*# sourceMappingURL=data:application/json;base64,".concat(
							btoa(
								unescape(encodeURIComponent(JSON.stringify(s)))
							),
							" */"
						)),
				e.styleSheet)
			)
				e.styleSheet.cssText = i;
			else {
				for (; e.firstChild; ) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(i));
			}
		}
		var h = null,
			g = 0;
		function y(e, t) {
			var a, i, n;
			if (t.singleton) {
				var s = g++;
				(a = h || (h = c(t))),
					(i = u.bind(null, a, s, !1)),
					(n = u.bind(null, a, s, !0));
			} else
				(a = c(t)),
					(i = m.bind(null, a, t)),
					(n = function () {
						!(function (e) {
							if (null === e.parentNode) return !1;
							e.parentNode.removeChild(e);
						})(a);
					});
			return (
				i(e),
				function (t) {
					if (t) {
						if (
							t.css === e.css &&
							t.media === e.media &&
							t.sourceMap === e.sourceMap
						)
							return;
						i((e = t));
					} else n();
				}
			);
		}
		e.exports = function (e, t) {
			(t = t || {}).singleton ||
				"boolean" == typeof t.singleton ||
				(t.singleton = n());
			var a = l((e = e || []), t);
			return function (e) {
				if (
					((e = e || []),
					"[object Array]" === Object.prototype.toString.call(e))
				) {
					for (var i = 0; i < a.length; i++) {
						var n = o(a[i]);
						r[n].references--;
					}
					for (var s = l(e, t), c = 0; c < a.length; c++) {
						var d = o(a[c]);
						0 === r[d].references &&
							(r[d].updater(), r.splice(d, 1));
					}
					a = s;
				}
			};
		};
	},
	function (e, t, a) {
		var i = a(11),
			n = a(12),
			s = a(0);
		t = i(!1);
		var r = n(s);
		t.push([
			e.i,
			'.kcs_neon{color:#228DFF;font-family:"Comic Sans MS", cursive, sans-serif;font-style:italic;animation:neon 10s cubic-bezier(1, 0, 0.9, 0) infinite alternate}@keyframes neon{from{color:#228DFF;text-shadow:0}to{color:white;text-shadow:1px 0 5px black}}.kcs_animated_gradient{background:linear-gradient(25deg, #4f0000, #aa5100, #a02c00, #220502);background-size:400% 400%;animation:animated_gradient 5s ease infinite}@keyframes animated_gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}input[type="number"]{padding:1px 0px 1px 0px}.messageBoxes{z-index:1001}.kcs_arrival_info{display:inline-block;width:8px;height:8px;border:1px solid black;vertical-align:text-bottom}.kcs_button{font-size:12px;padding:1px 6px 1px 6px;color:#fbd77d;border:1px solid #fcd87e;text-align:center;box-shadow:0 0 0 1px #2a1410;font-variant:small-caps;border-radius:3px;cursor:pointer;background:linear-gradient(to bottom, #4f0000, #220502)}.kcs_button:hover{background:linear-gradient(to bottom, #aa5100, #a02c00)}.kcs_button:active{background:linear-gradient(to bottom, #97aa12, #63700c);user-select:none}.kcs_button.disabled{color:#bcbcbc;border-color:#bdbdbd;cursor:default;background:#222222}.kcs_button.disabled:hover{background:#222222}.kcs_button.disabled:active{background:#222222;user-select:none}.awesome-button.disabled:active{background:#222222}.kcs_recruitment_button{vertical-align:middle;margin-left:2px;margin-right:6px;padding:0px 4px 0px 4px}.kcs_building_button_background{background:url(/img/layout/bg_table_cell.jpg) repeat;width:185px;background-position:-1px;margin-top:-1px;margin-left:-2px;padding:0px 0px 2px 5px}.kcs_building_level{font-size:12px;width:34px;height:15px;margin:1px 3px 1px 3px;padding-left:2px}.kcs_awesome_button{font-variant:small-caps}.kcs_awesome_button:active{background:linear-gradient(to bottom, #97aa12, #63700c)}.kcs_backlight{position:fixed;cursor:pointer;width:100%;height:100%;top:0;left:0;margin:0;background-color:rgba(0,0,0,0.7);z-index:1998}.kcs_textbox_boxarea{position:absolute;top:150px;text-align:center;z-index:2999;background-image:url(/img/layout/bg_table_cell.png);padding:7px;border-radius:5px;box-shadow:#000 0 5px 18px;line-height:16px;font-size:15px;font-family:Verdana, Arial, sans-serif;background-color:#eed29c;margin:0 auto}.kcs_textbox_textarea{min-width:250px;max-width:800px;min-height:100px;max-height:640px;border:1px solid black;border-radius:5px;background-color:rgba(255,255,255,0.7);font-size:12px;padding:3px 3px 3px 3px;text-align:left;overflow-y:auto}.kcs_headline{font-variant:small-caps;font-size:20px;font-style:italic;font-family:"Comic Sans MS", cursive, sans-serif}.kcs_settings_tab{overflow:auto;height:558px;display:inline-block;vertical-align:top;padding:10px 4px 9px 5px;font-size:12px;border-top:1px solid black;border-bottom:1px solid black}.kcs_settings_box{position:fixed;left:50%;top:10%;width:700px;height:640px;box-shadow:#000 0 5px 18px;background-color:#eed29c;z-index:2999;font-size:12px;color:#000000;padding:10px 3px 10px 3px;border-radius:13px;border:2px solid #2a1410;background-image:url(/img/layout/bg_table_cell.png);transform:translateX(-50%)}.kcs_settings_header{font-weight:bold;font-size:13px;padding:0px 0px 10px 10px;background-image:url(/img/group_jump.png);background-repeat:no-repeat;background-position:0px 2px}.kcs_dot_button{width:8px;height:8px;vertical-align:text-top}.kcs_chains,.kcs_chained{display:inline-block;width:16px;height:16px;vertical-align:bottom;margin:0px 3px 0px 3px;background-image:url(' +
				r +
				')}.kcs_chains:active,.kcs_chained:active{transform:rotate(45deg)}.kcs_chained{transform:rotate(25deg)}.kcs_market_quick_amount{vertical-align:text-top;width:85px;display:inline-block;overflow:hidden;white-space:nowrap;height:21px}.kcs_market_quick_amount_container{width:600px;margin-top:2px}.kcs_small_text{font-size:75%;vertical-align:text-bottom}.kcs_small_text2{font-size:75%}.kcs_submit{border:1px solid #c4a76e;padding:0px 4px 1px 4px;background-color:#d6b371;cursor:default;text-align:center;user-select:none}.kcs_submit:hover{background-color:#b18f53}.kcs_submit:active{background-color:#97aa12}.wof-boxes .action{font-size:90%}.kcs_main_box{font-size:11px;background-image:url(/img/layout/background_element.jpg);width:600px;position:absolute;top:72px;left:10px;border:1px solid #000000;box-shadow:#000 0 5px 18px;border-radius:8px;padding:10px 5px 10px 5px}.kcs_main_container{width:120px;display:inline-block;vertical-align:top;line-height:32px}.kcs_wheel_value_box{position:absolute;background-image:url(/img/layout/bg_table_cell.png);border:1px solid black;margin-top:40px;width:40px;margin-left:20px;text-align:center;font-size:75%;font-weight:bold;border-radius:16px}.kcs_wheel_amount_box{right:22px;top:-38px;border-radius:4px;width:110px;height:37px;line-height:18px}.kcs_main_click{cursor:pointer;user-select:none}.kcs_main_click:hover{color:#bf0053}.kcs_main_click:active{filter:grayscale(1)}.kcs_grayscale_hoverable:hover{filter:drop-shadow(2px 2px 4px black)}.kcs_grayscale_hoverable:active{filter:grayscale(1)}.kcs_lobby_button,.kcs_lobby_button_used{cursor:pointer;user-select:none;height:16px;display:inline-block;border:1px solid #993117;padding:3px 6px 3px 6px;border-radius:5px;color:#f9f1dc;line-height:12px;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.35);background:linear-gradient(to bottom, #db8e60, #d47948, #d47848, #d27445, #ce6a3f, #c75c35, #c55530, #c3522e, #c14c2b, #bf4728, #bd4325, #9b1b06, #a92c14);text-shadow:0px 1px 2px black;vertical-align:middle}.kcs_lobby_button:hover,.kcs_lobby_button_used:hover{text-shadow:0px 1px 3px gold;color:#ebebeb}.kcs_lobby_button:active,.kcs_lobby_button_used:active{color:yellow;line-height:16px;background:linear-gradient(to bottom, #ecc490, #e2a278, #d37647, #d27445, #d06d41, #cc663c, #c96038, #c85e36, #c55530, #c04b2a, #be4526, #bc4023)}.kcs_lobby_button_pressed{line-height:16px;cursor:default !important;background:linear-gradient(to bottom, #ecc490, #e2a278, #d37647, #d27445, #d06d41, #cc663c, #c96038, #c85e36, #c55530, #c04b2a, #be4526, #bc4023)}.kcs_lobby_button_pressed:hover{text-shadow:0px 1px 2px black}.kcs_lobby_button_working{color:yellow !important;animation:lobby_glow 1s ease-in-out infinite alternate}@keyframes lobby_glow{from{text-shadow:0px 1px 3px #ebebeb, 1px 4px 2px black}to{text-shadow:0px 1px 3px #ebebeb, 5px 4px 2px black}}.kcs_lobby_button_used{color:yellow !important;line-height:16px;cursor:default !important;color:yellow !important;background:linear-gradient(to bottom, #ecc490, #e2a278, #d37647, #d27445, #d06d41, #cc663c, #c96038, #c85e36, #c55530, #c04b2a, #be4526, #bc4023);animation:lobby_glow 1s ease-in-out infinite alternate}.kcs_lobby_input{font-size:12px;border-radius:3px;height:16px;border:1px solid #9a8f77;background-color:white;color:black}ul.layer_content_logo a:active{color:yellow}.kcs_lobby_input[type=text]{width:160px}.kcs_lobby_input[type=number]{width:35px}input:not([type="range"]):focus{background-color:#fdecd2}.kcs_widget{background-image:url(/img/premium/honorable-enemy_icon.png);background-size:contain}.widget_icon:hover{filter:brightness(1.3)}.widget_icon:active{filter:grayscale(1)}#lay_castle_widget{margin-top:-1px}.kcs_wheel_anim{filter:hue-rotate(220deg) brightness(150%)}input[type=submit]:active{background-color:#f6dba4}img.kcs_quicksend_troops{width:16px;height:16px;vertical-align:text-bottom}span.kcs_quicksend_troops{vertical-align:text-bottom}span.kcs_quicksend_troops:hover{border-bottom:1px dashed #000000;border-top:1px dashed #000000}td.quickentry{padding:0}*:hover>img[src$="arrow_right_raquo.png"]{filter:saturate(2.1)}*:active>img[src$="arrow_right_raquo.png"]{filter:grayscale(1)}span.kcs_quick_entry_txt{color:white;font-size:10px;font-family:Arial, Verdana, Sans-Serif;margin:-5px 0 0 5px}a.kcs_quick_entry:hover td.quickico{filter:drop-shadow(2px 2px 2px black)}a.kcs_quick_entry:active td.quickico{filter:grayscale(1) drop-shadow(2px 2px 2px black)}a.kcs_quick_entry:hover span.kcs_quick_entry_txt{color:yellow;text-shadow:1px 1px 2px rgba(255,215,0,0.7)}a.kcs_quick_entry:active span.kcs_quick_entry_txt{color:silver;text-shadow:1px 1px 2px rgba(255,215,0,0.7)}div.shortcut_element a:hover{color:yellow;text-shadow:1px 1px 2px black(255, 215, 0, 0.7)}div.shortcut_element a:active{color:silver;text-shadow:1px 1px 2px black(255, 215, 0, 0.7)}div.shortcut_element a:hover:not(:active) img:first-child{filter:saturate(5) brightness(1.2)}div.shortcut_element a:active img{filter:grayscale(1) brightness(0.7)}.kcs_shortcut_element{padding:5px 3px 0 3px}a.widget_icon:active{color:aliceblue}.barracksCommand .name{position:absolute;top:16px;left:60px}a:hover>span{color:#ec025c}a:active>span{color:black}td>a:hover{color:#ec025c}td>a:active{color:black}div>a:hover{color:#ec025c}div>a:active{color:black}.click:hover{color:#ec025c}.click:active{color:black;user-select:none}.awesome-button:active{background:linear-gradient(to bottom, #97aa12, #63700c);user-select:none}#kcs_attacks_table{width:820px;table-layout:fixed;white-space:nowrap;padding:0;margin:0;border:1px solid #CFAB65;border-collapse:collapse;background:url(/img/layout/bg_table_cell.jpg) repeat;font-family:Verdana}#kcs_attacks_table td{overflow:hidden;border:1px solid #CFAB65;font-size:10.6px;padding:1px}#kcs_attacks_table tr{line-height:19px}#kcs_attacks_table a:hover{color:#ec025c !important}#kcs_attacks_table a:active{color:black !important}.kcs_cell_checkbox{width:20px;text-align:center;padding-top:0}.kcs_attacks_small_text{font-size:75%}.kcs_cell_description{width:110px}.kcs_cell_target{width:226px}.kcs_cell_source{width:258px}.kcs_cell_timestamp{width:127px;text-align:center}.kcs_cell_timeleft{width:60px;text-align:center;background:yellow}img.kcs_attacks_unit{vertical-align:top}.kcs_map_target_settlement_marker{z-index:50;width:53px;height:38px;top:0;left:0;position:absolute;background-color:rgba(255,0,0,0.1);box-shadow:0px 0px 0px 1px red inset}.kcs_map_own_settlement_marker{z-index:49;width:53px;height:38px;top:0;left:0;position:absolute;background-color:rgba(0,0,0,0.1);box-shadow:0px 0px 0px 1px black inset}.kcs_map_current_settlement_marker{z-index:51;width:53px;height:38px;top:0;left:0;position:absolute;background-color:rgba(255,255,255,0.1);box-shadow:0px 0px 0px 1px white inset}.kcs_map_in_range_settlement_marker{z-index:47;width:53px;height:38px;top:0;left:0;position:absolute;background-color:rgba(255,0,0,0.15)}div#map td:hover div img+div{z-index:52;width:53px;height:38px;top:0;left:0;position:absolute;box-shadow:1px -1px 0px 0px yellow inset}div#map a:active>div{background-color:rgba(255,255,0,0.4);box-shadow:0px 0px 0px 1px yellow inset !important}div#mapContainer{user-select:none}#mapContainer.kcs_mark_free td[class="free"] div{z-index:51;width:53px;height:38px;top:0;left:0;position:absolute;background-color:rgba(0,217,255,0.15)}.kcs_map_groups{z-index:53;width:8px;height:8px;position:absolute;display:inline-block;border:1px solid #000000;pointer-events:none}.kcs_map_group_0{top:23px;left:2px;background-color:#ff8274}.kcs_map_group_1{top:23px;left:12px;background-color:#98f5ff}.kcs_map_group_2{top:23px;left:22px;background-color:#fffaaa}.kcs_attacks_group,.kcs_attacks_group_0,.kcs_attacks_group_1,.kcs_attacks_group_2{display:inline-block;width:4px;height:4px;margin-right:1px;border:1px solid black}tr.kcs_planer_support{background-color:lavenderblush !important}tr.kcs_planer_support>td{background:transparent}tr.kcs_planer_attack{background-color:yellow}tr.kcs_planer_attack>td{background:transparent}.kcs_attacks_group_0{background-color:#ff8274}.kcs_attacks_group_1{background-color:#98f5ff}.kcs_attacks_group_2{background-color:#fffaaa}.kcs_map_overlay{background-color:#ffdfb2;border-radius:10px;z-index:48;width:19px;height:19px;position:absolute;display:inline-block;pointer-events:none;line-height:0}.kcs_map_overlay_snob{top:17px;right:2px}.kcs_map_overlay_treaty{top:0px;left:13px}.kcs_map_overlay_unit{top:0px;right:2px}.kcs_modern_box{background:url(/img/layout/bg_table_cell2.jpg) repeat;border:3px double #CFAB65;margin:0px;padding:3px;border-radius:9px}input[type=\'range\']{cursor:pointer;overflow:hidden;-webkit-appearance:none;outline:none;height:15px;width:99%;margin:0;background-color:#967841}input[type=\'range\']::-webkit-slider-thumb{-webkit-appearance:none;height:15px;width:15px;border:1px solid #999999;border-radius:9px;background:#f0f0f0;box-shadow:-105px 0 0 100px #f0dfaa}input[type="range"]::-moz-range-progress{background-color:#faebd2}input[type="range"]::-moz-range-track{background-color:#967841}\n',
			"",
		]),
			(e.exports = t);
	},
	function (e, t, a) {
		"use strict";
		e.exports = function (e) {
			var t = [];
			return (
				(t.toString = function () {
					return this.map(function (t) {
						var a = (function (e, t) {
							var a = e[1] || "",
								i = e[3];
							if (!i) return a;
							if (t && "function" == typeof btoa) {
								var n =
										((r = i),
										(o = btoa(
											unescape(
												encodeURIComponent(
													JSON.stringify(r)
												)
											)
										)),
										(l =
											"sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
												o
											)),
										"/*# ".concat(l, " */")),
									s = i.sources.map(function (e) {
										return "/*# sourceURL="
											.concat(i.sourceRoot || "")
											.concat(e, " */");
									});
								return [a].concat(s).concat([n]).join("\n");
							}
							var r, o, l;
							return [a].join("\n");
						})(t, e);
						return t[2]
							? "@media ".concat(t[2], " {").concat(a, "}")
							: a;
					}).join("");
				}),
				(t.i = function (e, a, i) {
					"string" == typeof e && (e = [[null, e, ""]]);
					var n = {};
					if (i)
						for (var s = 0; s < this.length; s++) {
							var r = this[s][0];
							null != r && (n[r] = !0);
						}
					for (var o = 0; o < e.length; o++) {
						var l = [].concat(e[o]);
						(i && n[l[0]]) ||
							(a &&
								(l[2]
									? (l[2] = ""
											.concat(a, " and ")
											.concat(l[2]))
									: (l[2] = a)),
							t.push(l));
					}
				}),
				t
			);
		};
	},
	function (e, t, a) {
		"use strict";
		e.exports = function (e, t) {
			return (
				t || (t = {}),
				"string" != typeof (e = e && e.__esModule ? e.default : e)
					? e
					: (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
					  t.hash && (e += t.hash),
					  /["'() \t\n]/.test(e) || t.needQuotes
							? '"'.concat(
									e
										.replace(/"/g, '\\"')
										.replace(/\n/g, "\\n"),
									'"'
							  )
							: e)
			);
		};
	},
	function (e, t, a) {
		"use strict";
		a.r(t);
		a(8);
		const i = void 0 === window.timeStart ? null : window.timeStart,
			n =
				(void 0 === window.serverTime || window.serverTime,
				void 0 === window.timersDown ? null : window.timersDown),
			s = void 0 === window.prograssBars ? null : window.prograssBars,
			r = void 0 === window.playerId ? null : window.playerId,
			o = void 0 === window.jQuery ? null : window.jQuery,
			l = void 0 === window.updateContent ? null : window.updateContent,
			c = void 0 === window.showContent ? null : window.showContent,
			d = void 0 === window.showMessages ? null : window.showMessages,
			p = void 0 === window.MapGoLink ? null : window.MapGoLink,
			u = void 0 === window.UnTip ? null : window.UnTip,
			m = void 0 === window.ressis ? null : window.ressis;
		void 0 === window.jq || window.jq;
		if (null == o)
			throw (
				(window.location.reload(),
				new Error("Cannot load jQuery, reloading."))
			);
		var h = o(window.document),
			g = a(1),
			y = a.n(g),
			b = a(2),
			k = a.n(b),
			f = a(3),
			w = a.n(f),
			A = a(4),
			v = a.n(A),
			x = a(0),
			$ = a.n(x),
			S = a(5),
			q = a.n(S),
			_ = a(6),
			C = a.n(_),
			T = a(7),
			B = a.n(T),
			j = {
				audio: {
					beep: y.a,
					crickets: k.a,
					oink: w.a,
					die: v.a,
					order: B.a,
				},
				image: {
					chains: $.a,
					noUnit: q.a,
					spinner:
						'<svg style="vertical-align:middle;width:inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="40" style="fill:none;stroke-dasharray:60;stroke-width:20"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.8s" begin="0s" repeatCount="indefinite"/></circle></svg>',
					description: C.a,
				},
			};
		var z = {
			ar: {
				name: "Argentina",
				timezone: "America/Argentina/Buenos_Aires",
				language: "ar",
				code: "ar",
			},
			br: {
				name: "Brasil",
				timezone: "America/Sao_Paulo",
				language: "br",
				code: "br",
			},
			de: {
				name: "Deutschland",
				timezone: "Europe/Berlin",
				language: "de",
				code: "de",
			},
			es: {
				name: "España",
				timezone: "Europe/Madrid",
				language: "es",
				code: "es",
			},
			fr: {
				name: "France",
				timezone: "Europe/Paris",
				language: "fr",
				code: "fr",
			},
			it: {
				name: "Italia",
				timezone: "Europe/Rome",
				language: "it",
				code: "it",
			},
			hu: {
				name: "Magyarország",
				timezone: "Europe/Budapest",
				language: "hu",
				code: "hu",
			},
			mx: {
				name: "México",
				timezone: "America/Mexico_City",
				language: "mx",
				code: "mx",
			},
			nl: {
				name: "Nederland",
				timezone: "Europe/Amsterdam",
				language: "nl",
				code: "nl",
			},
			pl: {
				name: "Polska",
				timezone: "Europe/Warsaw",
				language: "pl",
				code: "pl",
			},
			pt: {
				name: "Portugal",
				timezone: "Europe/Lisbon",
				language: "pt",
				code: "pt",
			},
			ro: {
				name: "Romania",
				timezone: "Europe/Bucharest",
				language: "ro",
				code: "ro",
			},
			tr: {
				name: "Türkiye",
				timezone: "Europe/Istanbul",
				language: "tr",
				code: "tr",
			},
			us: {
				name: "USA",
				timezone: "America/New_York",
				language: "en",
				code: "us",
			},
			en: {
				name: "United Kingdom",
				timezone: "Europe/London",
				language: "en",
				code: "en",
			},
			cz: {
				name: "Česká Republika",
				timezone: "Europe/Prague",
				language: "cz",
				code: "cz",
			},
			gr: {
				name: "Ελλάδα",
				timezone: "Europe/Athens",
				language: "gr",
				code: "gr",
			},
			ru: {
				name: "Российская Федерация",
				timezone: "Europe/Moscow",
				language: "ru",
				code: "ru",
			},
		}[
			h.find('meta[name="language"]').attr("content") ||
				h.find('meta[http-equiv="Content-Language"]').attr("content") ||
				h.find('meta[http-equiv="language"]').attr("content")
		];
		const M = {
			pl: {
				markAll: " marca todos los ",
				barracks: " cuartel ",
				groupsFromMap: " Grupo del mapa ",
				statusExportAsBBCodes:
					" Exportación de grupos guardados en el mapa ",
				totalFound: " Todo encontrado:",
				overviewTransportReceive: "Transportes",
				supportTarget: " Apoyo",
				kataTarget:
					"Edificio a demoler (X - use el valor predeterminado de la configuración)",
				willRally: (e) =>
					` voy a enviar a ${e} cuando tienes 20 unidades - `,
				refreshRate: " Frecuencia de actualización (sec):",
				recruitFarmers: "Entrena milicia",
				bbCodes: "BB-Codes",
				ignore: "Ignorar",
				volume: "Volumen",
				rallyPoint:
					" Enviar nuevas unidades reclutadas a (cuando llegues a los 20) ",
				fields: "campos",
				distanceFrom: " distancia",
				otherAlarm: " Desde de la alianza ",
				ownAlarm: " Desde fuera de la alianza ",
				serverUp: " servidor arriba",
				serverIsUpAlready:
					" ¡Este servidor está activo hace mucho tiempo! ¿Continuar?",
				waitingForServer:
					" Estoy esperando que el servidor se levante. ",
				server: " servidor ",
				crowns: " coronas ",
				excelSummary: "Excel Resumen",
				dicesAll: " cubos ",
				crownsAll: " suma de coronas",
				hotkey: "Atajo: ",
				barracksRecruit: "reclutamiento",
				tryNewServer:
					" Espera un nuevo servidor (+ configuración por defecto)",
				playServer: " Servidor principal:",
				maxSpins: " giros máximos: ",
				timersPassed: "temporizadores pasados",
				massDeleteFakeAttacks: " Eliminar ataques falsos",
				duration: "horas:minutos",
				mapUnits: "unidades",
				planerAttackFailedToSend:
					" El ataque del avión no se pudo enviar",
				useOnlyLocal: "usar solo  piedra locales:",
				lasted: "durar",
				timePassed: " es desde el principio",
				lastStoneAttackTime: "Último ataque:",
				wheelStratDices:
					" Compre dados cuando la cantidad sea inferior a",
				wheelStratCrowns: "Coronas y piedras",
				wheelStratResources: "Materiales",
				wheelStratTreaties: "Tratado",
				wheelStratPlans: "Planos de construccion",
				wheelStratRelocations: "Traslado",
				randomAttack: "(+1 ataque aleatorio para cada 3)",
				wheelAmountInfo: "Gira a ",
				wheelAmount: "Suma: ",
				wheelAutoSpin: " giro automático ",
				needTarget: " necesita objetivo...",
				quickCoords: " coordenadas: ",
				wheelSpinnerNoStones: " Gira la ruleta sin comprar dados",
				wheelSpinner: "girando la rueda",
				stoneAttackCount: " número de ataques: ",
				needAllyTagRange: "Etiqueta alianza min. 2, max. 6 caracteres!",
				needAllyNameRange: "Nombre alianza min. 4, max. 32 caracteres!",
				needAllyTag: "Necesario etiqueta alianza...",
				needAllyName: " Necesario Nombre alianza...",
				createAllyName: "Nombre alianza: ",
				createAllyTag: "Etiqueta alianza: ",
				stepByStep: "servidores al mismo tiempo: ",
				cannotFindAnySettlementsInRange:
					"No he encontrado asentamientos hostiles dentro del rango dado",
				refresh: " actualizar!",
				howLongAgoSpotted: " Fecha/Tiempo de llegada",
				descriptionInfo: "[max-min] Tipo&nbsp;de tropa",
				sourceAndTargetInfo: "(Coordenadas) Jugador ",
				groupsHotkeys:
					" Seleccione con las teclas de estado: q, w, e (np. off, def, farm)",
				mapNotes: "Nota:",
				mapEnterNotes: " Introduzca una nota con la tecla: Enter",
				anotherTabProcessing:
					" Otra pestaña abierta. -> mira para allá, deja de trabajar!",
				noValidUnitsToSend: "[No hay unidades válidas para enviar]",
				options: "Opciones:",
				mapCopyCoords: " Copiar coordenadas con la tecla: k",
				mapLegend: "Leyenda - después de flotar sobre un pueblo: ",
				mapUnitRange: " rango de unidades ",
				mapUnitRangeExp: " la liquidación actual o seleccionada ",
				showTreaties: "Mostrar paloma:",
				showLargestUnitType: " Mostrar tropas en propia aldea. ",
				showSnobs: " Mostrar conde en propia aldea:",
				showPossibleRelocation:
					" Colorea los campos restantes disponibles:",
				loggedIn: " Conectado ",
				description: " Descripción ",
				destination: "Objetivo",
				origin: "Origen",
				arrival: "Llegada",
				serverCount: "Conteo de servidores :",
				offBrain: "cerebro offa",
				gatherArmyInfo:
					" Obtener información sobre las fuerzas armadas. ",
				gatherArmyInfoText:
					"ID jugador / puntos de jugador / ID pueblos / nombre del pueblo / Coordenadas del pueblo / El ejército en el pueblo. ",
				leaveImportantAttacks: " Eliminar solo las falsificaciones ",
				settlementsInAllyRangeMinPoints: "Min puntos:",
				needToBeInAlly: " Debes tener una alianza!",
				settlementsInAllyRangeMaxDistance: "Max distancia",
				settlementsInAllyRange: " Encontrar en el rango:",
				onlyThisVillage: " solo este pueblo",
				massDeleteAttacks: " Eliminar todos los ataques ",
				deleteOverdueAttacks: " Eliminar ataques vencidos ",
				addSpies: " lanzar en ataque de espías por cada ataque falso:",
				wholeDaySending:
					" Plan para todo el día, no para un tiempo específico:",
				fillAndTrainAllGroups: " Completa y recluta todos los grupos.",
				attacksAreSupport: " Los ataques se enviarán como apoyo:",
				attacksPerVillage: " Número de ataques de cada pueblo:",
				researchMissingUnits: " Examina las unidades que faltan",
				delayedHotkey: "atajo (demora 5s): ",
				massRecruit: "Entrenamiento masivo",
				multiSmith: "Orfebrería",
				overviewArmy: "Tropas",
				overviewSupport: "Apoyos",
				overviewProduction: "Producción",
				overviewBuildings: "Edificios",
				overviewSent: "Órdenes",
				snobMixin: " Revuelva en una imitación gruesa",
				types: "Tipos:",
				format: "Formato:",
				importAttacks: " Ataques de importación",
				level: "Nivel",
				worksBestRecently: " Funciona mejor en un informe nuevo",
				calculateHideoutLevel: " Calcular el nivel del escondite",
				attack: " ataque",
				support: "Apoyo",
				templates: "Plantillas:",
				sendFixedResources:
					" Envía exactamente 50k recursos desde el pueblo que estás viendo",
				research: " Investigar",
				done: " Hecho",
				needCredentials: " Necesitas un usuario y contraseña!",
				stoneAttackTarget: " Blanco del ataque (nombre del jugador):",
				fastForward: " entrega rápida",
				login: " iniciar sesión",
				credentials: " Autenticación",
				username: " Nombre de usuario",
				password: "Clave",
				servers: " Servidores",
				settlementBuildUp: " Construcción de un pequeño pueblo.",
				createAlly: " Crear una alianza ",
				stoneAttack: " Ataque por una piedra ",
				castle: "Castillo",
				premiumWheelOfFortune: " La rueda de la fortuna",
				premiumInventory: " inventario premium",
				error: "error!",
				additionalFilters: " Filtros rápidos:",
				recipients: " Destinatarios:",
				semicolonSeparated:
					" Separe las personas consecutivas con punto y coma",
				quickForward: "Mensaje",
				buildAnyway:
					" Configurar una cola de construcción cuesta recursos adicionales. ¿Estás seguro de que quieres construirlo?",
				noUnitsToSend:
					"[ el pueblo actual no tiene ninguna unidad para enviar]",
				time: "tiempo",
				recruit: "Entrenar",
				buildLevels: " Niveles de construcción ",
				cancelNoReload: " Abortar sin recargar ",
				copyToClipboard: " Copiar al portapapeles ",
				copyCoordsToClipboard: " Copiar al portapapeles ",
				goToBarracks: " Cambiar a Barracones",
				goToCastle: " Cambiar a Castillo",
				attackPlanner: "Planificador de ataques",
				addToAttackPlanner: " Agregar al planificador de ataques",
				sendBackResources:
					" Envía recursos de la aldea que estás viendo al recurso actual: a ",
				asBbCodes: " Mostrar en BB-Code",
				overall: "Todos",
				armyScore: " Puntos de tropas ",
				carryWeight: " Capacidad de levantamiento: ",
				allyDetails: " Calcular puntos de tropas da alianza",
				player: "Jugador",
				settlements: " Colonias ",
				settlementsDetails: " Detalles de las colonias ",
				buildings: {
					main: "Castillo",
					stone: "Cantera",
					wood: "Aserradero",
					iron: "Mina de mineral",
					storage: "Almacen",
					hide: "Escondite",
					farm: "Molino",
					barracks: "Barracones",
					wall: "Muralla",
					stable: "Establo",
					market: "Mercado",
					garage: "Alquimista",
					snob: "Mansion",
					smith: "Orfebreria",
					statue: "Monumento",
				},
				units: {
					farmer: "Milicia de campesinos",
					sword: "Templario",
					spear: "Escudero",
					axe: "Berserker",
					bow: "Arco largo",
					spy: "Espia",
					light: "Cruzado",
					heavy: "Caballero negro",
					ram: "Ariete",
					kata: "Trebuchet",
					snob: "Conde",
				},
				actions: {
					attack: " Ataque",
					support: "Apoyo",
					espy: " Espiar",
				},
				audio: {
					beep: "Sputnik",
					crickets: "Grillos",
					oink: "Cerdo",
					die: "¡Guau!",
					order: "Dominio",
				},
				settings: {
					title: "komu czeba sury?",
					version: "(wersja: 1.8.7 - flaga fix)",
					defaultAttackTargetSetting:
						" Por defecto tormentas al atacar desde el cuartel y planificador",
					multiSendSetting: " Envío múltiple",
					buildingWarnSetting:
						" Niveles de construcción por debajo de los cuales marcan en rojo en vistas -> edificios",
					marketQuickAmountsSetting: " Plantillas en el mercado",
					quickSendUnitsSetting:
						" Envío rápido en la vista previa de la aldea enemiga",
					barrackTemplates: " Plantillas militares en cuarteles",
					save: " guardar cambios",
					saveOk: " Salvado!",
					reset: " Reiniciar ajustes",
					resetOk: " Reiniciar!",
					refresh: " ¡Recarga la página!",
					raxMulti: " Multiplicador de cuarteles sin máquinas",
					protectionTimesDownload:
						" Los tiempos de descenso de los refugios antes del ataque y conquista",
					protectionTimesDownloadButton: " Obtener los tiempos",
					protectionTimesDownloadIdStart: " Empezar con id: ",
					pleaseWaitSorry: " Podría llevar mucho tiempo...",
					finished: " Veces descargado!",
					onClipboard:
						" ¡En la guantera! Guardar los datos en un archivo.",
					noProtection: " sin protección ",
					fromAttack: " sin proteccióna de ataques",
					fromConquest: " sin protección de conquista ",
					allInServerTime:
						" Los tiempos se dan en la hora del servidor local.",
					downloadError:
						" Error de descarga, ¿identificación demasiado alta?",
					barrackQuickCoords: " Coordenadas rápidas en el cuartel",
					quickCoordsPlaceholder:
						"koordy|koordy(opcjonalny opis), 500|500(wioseczka 1), 520|520, 400|400(cośtam)...",
				},
				descriptions: {
					lobbyText:
						'<b> Número de mundos </b><br>\n      El número de mundos por los que pasará el bot al realizar sus acciones automáticas.<br>\n      Por lo general, solo juegas el último mundo, por lo que el valor predeterminado es el número de mundos menos 1.<br>\n      <b>UWAGA!</b> recuerda no hacer girar la rueda en tu servidor principal por accidente!<br><br>      \n      <b> Construcción de un pequeño pueblo. </b> (atajo: b)<br>\n      El guión pasará por todos los mundos y colocará una pequeña aldea en ellos para enviar una aldea. <br>  n En mundos más lentos, puede llevar varios días..<br>\n      El script debe construir un cuartel, un molino, minas, etc. para poder enviar 30 aldeas en aproximadamente 7 ataques..<br>\n      En mundos grandes donde la aldea irá por unos días, el molino tiene que acomodar 30 aldeanos, 7 ataques cada uno durante 6 días al nivel apropiado, se agregará un muro a 6 y algunos edificios aleatorios (diferentes puntos en mundos diferentes)<br>\n      En la práctica, usar esto en una cuenta nueva debería verse así:<br>\n      1. Enciende la construcción del pequeño una vez <br>\n      2. Espere 40 minutos <br>\n      3. Vuelva a encender el edificio del pequeño: ahora se deben construir los cuarteles <br>\n      4. Espera otros 30 minutos <br>\n      5. Enciende la construcción del pequeño: inventará templarios y comenzará a construir las minas, molinos y un almacén necesarios. <br>\n      6. espera un dia.<br>\n      7. Una construcción más de una pequeña: en mundos más jóvenes, los molinos ya deberían estar derribando al nivel requerido.<br>\n      8. espera un dia.<br>\n      9. De ahora en adelante, haga clic solo una vez al día para atacar una piedra: el script seguirá colocando edificios donde debe estar..<br><br>\n      <b> Ataque por una piedra </b> (atajo: a)<br>\n      Establezca el objetivo del ataque (preferiblemente una segunda persona con un script que tenga cuentas en todos los mundos) y dispare una vez al día.<br>\n      El guión en sí reclutará al pueblo y posiblemente a los templarios.<br>\n      El ataque por la piedra primero realiza todas las acciones para construir una pequeña aldea, por lo que si alguien en cualquier mundo conquista una aldea, el guión se encargará de ello..<br>\n      Recuerda: para obtener un guijarro, debes atacar a un jugador que tenga una alianza y no sea tu aliado..<br><br>      \n      <b> Crear una alianza </b><br>\n      Complete el nombre y la etiqueta de la alianza y el script formará una alianza en cada mundo.<br>\n      Requerido para que los jugadores que golpean el asentamiento por piedra tengan "Combate clasificado".<br><br>\n      <b> girando la rueda </b> (atajo: k)<br>\n      El guión se ejecutará a través de los mundos disponibles (máximo 4 al mismo tiempo) y girará la rueda hasta que se agote. <b> LOCAL </b> piedras.<br>\n      Además de las piedras, también utilizará los cubos y desempaquetará las coronas inmediatamente después de recibirlas..<br>\n      A menos que ya lo hayas apagado, también intentará comprar dados para aumentar las posibilidades de coronas..<br>\n      El bot disparado con este modo no respetará la configuración de estrategia para un mundo determinado (es decir, solo juega con coronas y piedras)',
					lobbyTitle: " ¿Cómo está funcionando?!?!",
					wheelText:
						"<b> Giro automático </b><br>\n      Elija en qué debe enfocarse el bot y... enciéndalo!<br>\n      En la rueda se pueden ver los valores establecidos de las reliquias y a partir de qué valor el bot decide girar en lugar de usar los dados.<br>\n      Establecí los umbrales de valor sobre la base de datos estadísticos de 10 mil. ruedas.<br>\n      Resulta que los dados realmente pueden cambiar mucho y el bot lo tiene en cuenta, maximizando las ganancias..<br>\n      Diferentes combinaciones de estrategias (recursos, tratados, planes, etc.) tienen diferentes umbrales.<br>\n      Entonces, por ejemplo, si se seleccionan materias primas, el bot esperará hasta que aparezca la cantidad adecuada de materias primas en la rueda..<br>\n      El bot debe tener dados para usar: el mundo principal se quedará sin dados, honestamente espere a que otros mundos ganen <br>\n      algunas coronas y comprarlas, en muchos casos usar piedras sin cubos es solo un desperdicio de ellas.<br>\n      Sin dados significa el final de la filmación.!<br><br>\n      <b> ¿Cómo ganar muchos recursos?</b><br>\n      Cuando buscas recursos, no vale la pena girar la rueda solo porque tiene 10 piedras o 100 coronas.<br>\n      Si quieres más coronas, ve a buscar otros mundos: el mundo principal necesita sura.<br>\n      Al volar todos los días en busca de guijarros en otros mundos, ganas aproximadamente 1 corona por la cantidad de mundos.<br>\n      Ejemplo: Turkish ahora tiene 37 mundos, por lo que en el último juegas por 36 coronas, 1x36 = 36 coronas por día.<br>\n      Sacar una sola 100 coronas es una posibilidad tan pequeña que es mejor dejarlo ir en el mundo principal..<br>\n      La posibilidad de grandes entregas es bastante alta, vale la pena jugar con los dados hasta que obtengas la cantidad correcta de sura en la rueda..<br>\n      Es suficiente usar 2-3 dados y dibujar siempre en un círculo con 2 o más grandes, muchos pequeños o varios medianos.<br>\n      Por lo tanto, también vale la pena abastecerse de dados al disparar: el robot de la máquina intentará comprarlos si tiene coronas..<br>\n      Te recomiendo que compres unas 2 veces más cubos que piedras a la hora de dibujar recursos en el mundo principal.<br>\n      Si compras 200 piedras (2400 coronas), vale la pena tener 400 cubos (800 coronas) más que las siguientes 66 piedras (792 coronas).<br><br>\n      <b> Volúmenes de suministro de materias primas </b><br>\n      Para un tipo de recurso:<br>\n      Od 0 do 1,000 punktów: 5.000 (duża) - 1.600 (średni) - 400 (mały)<br>\n      Od 1,001 do 2,000 punktów: 10,000 - 3,200 - 800<br>\n      Od 2,001 do 15,000 punktów: 50,000 - 16,000 - 4,000<br>\n      Od 15,001 do 50,000 punktów: 150,000 - 60,000 - 15,000<br>\n      Z 50,000 punktów: 500,000 - 200,000 - 50,000<br>\n      Mieszane surowce:<br>\n      Od 0 do 1,000 punktów: 2.500 (duża) - 800 (średni) - 200 (mały)<br>\n      Od 1,001 do 2,000 punktów: 5,000 - 1,600 - 400<br>\n      Od 2,001 do 15,000 punktów: 25,000 - 8,000 - 2,000<br>\n      Od 15,001 do 50,000 punktów: 75,000 - 30,000 - 7,500<br>\n      Z 50,000 punktów: 250,000 - 100,000 - 25,000<br><br>\n      <b> Probabilidades basadas en 10 mil. kół</b><br>\n      <table><tbody>\n      <tr><td>relikt</td><td>będzie na kole</td><td>wystąpi 1x</td><td>wystąpi 2x</td><td>wystąpi 3x</td><td>wystąpi 4x</td><td>wystąpi 5x</td></tr>\n      <tr><td>Królewski doradca - długi</td><td>40.82%</td><td>33.02%</td><td>7.07%</td><td>0.69%</td><td>0.03%</td><td>--</td></tr>\n      <tr><td>Królewski doradca - krótki</td><td>37.81%</td><td>30.2%</td><td>6.63%</td><td>0.84%</td><td>0.13%</td><td>--</td></tr>\n      <tr><td>10 Koron</td><td>32.05%</td><td>26.52%</td><td>4.88%</td><td>0.62%</td><td>0.02%</td><td>--</td></tr>\n      <tr><td>20 Koron</td><td>17.52%</td><td>15.88%</td><td>1.52%</td><td>0.11%</td><td>--</td><td>--</td></tr>\n      <tr><td>50 Koron</td><td>17.6%</td><td>16.02%</td><td>1.38%</td><td>0.19%</td><td>--</td><td>--</td></tr>\n      <tr><td>100 Koron</td><td>11.4%</td><td>10.84%</td><td>0.56%</td><td>--</td><td>--</td><td>--</td></tr>\n      <tr><td>Szybkie przeniesienie</td><td>9.42%</td><td>9.14%</td><td>0.27%</td><td>--</td><td>--</td><td>--</td></tr>\n      <tr><td>Zaplanowane przeniesienie</td><td>5.53%</td><td>5.43%</td><td>0.09%</td><td>--</td><td>--</td><td>--</td></tr>\n      <tr><td>Kamień szczęścia</td><td>22.64%</td><td>20.06%</td><td>2.35%</td><td>0.22%</td><td>--</td><td>--</td></tr>\n      <tr><td>3x Kamień szczęścia</td><td>17.76%</td><td>16.12%</td><td>1.46%</td><td>0.18%</td><td>--</td><td>--</td></tr>\n      <tr><td>10x Kamień szczęścia</td><td>9.%</td><td>8.76%</td><td>0.23%</td><td>--</td><td>--</td><td>--</td></tr>\n      <tr><td>Kostka szczęścia</td><td>76.47%</td><td>35.81%</td><td>25.23%</td><td>10.98%</td><td>3.49%</td><td>0.75%</td></tr>\n      <tr><td>3x Kostka szczęścia</td><td>50.06%</td><td>34.49%</td><td>12.53%</td><td>2.51%</td><td>0.43%</td><td>0.07%</td></tr>\n      <tr><td>10x Kostka szczęścia</td><td>23.35%</td><td>20.73%</td><td>2.33%</td><td>0.28%</td><td>--</td><td>--</td></tr>\n      <tr><td>Podkowa</td><td>56.62%</td><td>37.99%</td><td>14.04%</td><td>3.81%</td><td>0.66%</td><td>0.11%</td></tr>\n      <tr><td>5x Podkowa</td><td>2.6%</td><td>2.57%</td><td>0.02%</td><td>--</td><td>--</td><td>--</td></tr>\n      <tr><td>15x Podkowa</td><td>22.62%</td><td>19.57%</td><td>2.78%</td><td>0.24%</td><td>0.02%</td><td>--</td></tr>\n      <tr><td>Anuluj: atak</td><td>21.21%</td><td>18.49%</td><td>2.53%</td><td>0.19%</td><td>--</td><td>--</td></tr>\n      <tr><td>Anuluj: szpiegowanie</td><td>49.78%</td><td>35.51%</td><td>11.69%</td><td>2.2%</td><td>0.33%</td><td>0.05%</td></tr>\n      <tr><td>Anuluj: wsparcie</td><td>23.86%</td><td>20.91%</td><td>2.74%</td><td>0.21%</td><td>--</td><td>--</td></tr>\n      <tr><td>Stare plany budowy</td><td>76.09%</td><td>35.99%</td><td>24.95%</td><td>11.02%</td><td>3.26%</td><td>0.72%</td></tr>\n      <tr><td>Dopuszczalne plany budowy</td><td>50.56%</td><td>35.78%</td><td>11.83%</td><td>2.54%</td><td>0.38%</td><td>0.02%</td></tr>\n      <tr><td>Dobre plany budowy</td><td>22.17%</td><td>19.36%</td><td>2.51%</td><td>0.29%</td><td>0.01%</td><td>--</td></tr>\n      <tr><td>Znakomite plany budowy</td><td>21.77%</td><td>18.94%</td><td>2.58%</td><td>0.22%</td><td>0.02%</td><td>--</td></tr>\n      <tr><td>Mistrzowskie plany budowy</td><td>14.63%</td><td>13.78%</td><td>0.85%</td><td>--</td><td>--</td><td>--</td></tr>\n      <tr><td>Perfekcyjne plany budowy</td><td>11.27%</td><td>10.82%</td><td>0.43%</td><td>--</td><td>--</td><td>--</td></tr>\n      <tr><td>Mała atrapa wojsk</td><td>37.39%</td><td>30.15%</td><td>6.18%</td><td>0.95%</td><td>0.09%</td><td>0.01%</td></tr>\n      <tr><td>Średnia atrapa wojsk</td><td>22.88%</td><td>20.14%</td><td>2.52%</td><td>0.19%</td><td>0.02%</td><td>--</td></tr>\n      <tr><td>Duża atrapa wojsk</td><td>31.68%</td><td>26.04%</td><td>4.93%</td><td>0.63%</td><td>0.07%</td><td>--</td></tr>\n      <tr><td>Mała dostawa rudy</td><td>76.45%</td><td>35.43%</td><td>25.41%</td><td>11.51%</td><td>3.13%</td><td>0.78%</td></tr>\n      <tr><td>Średnia dostawa rudy</td><td>50.18%</td><td>35.52%</td><td>11.76%</td><td>2.44%</td><td>0.38%</td><td>0.05%</td></tr>\n      <tr><td>Duża dostawa rudy</td><td>27.66%</td><td>23.32%</td><td>3.85%</td><td>0.42%</td><td>0.05%</td><td>--</td></tr>\n      <tr><td>Mała dostawa kamieni</td><td>76.16%</td><td>35.47%</td><td>25.46%</td><td>10.86%</td><td>3.36%</td><td>0.89%</td></tr>\n      <tr><td>Średnia dostawa kamieni</td><td>50.26%</td><td>34.83%</td><td>12.15%</td><td>2.8%</td><td>0.45%</td><td>0.03%</td></tr>\n      <tr><td>Duża dostawa kamieni</td><td>27.42%</td><td>22.98%</td><td>4.%</td><td>0.37%</td><td>0.06%</td><td>--</td></tr>\n      <tr><td>Mała dostawa drewna</td><td>75.42%</td><td>35.86%</td><td>24.6%</td><td>10.63%</td><td>3.4%</td><td>0.78%</td></tr>\n      <tr><td>Średnia dostawa drewna</td><td>51.62%</td><td>36.5%</td><td>11.97%</td><td>2.73%</td><td>0.33%</td><td>0.07%</td></tr>\n      <tr><td>Duża dostawa drewna</td><td>27.69%</td><td>23.21%</td><td>3.94%</td><td>0.48%</td><td>0.04%</td><td>0.02%</td></tr>\n      <tr><td>Mała dostawa surowców</td><td>56.47%</td><td>37.09%</td><td>14.49%</td><td>3.94%</td><td>0.81%</td><td>0.11%</td></tr>\n      <tr><td>Średnia dostawa surowców</td><td>31.92%</td><td>26.67%</td><td>4.74%</td><td>0.47%</td><td>0.03%</td><td>--</td></tr>\n      <tr><td>Duża dostawa surowców</td><td>19.83%</td><td>17.71%</td><td>1.88%</td><td>0.2%</td><td>0.02%</td><td>--</td></tr>\n      <tr><td>Traktat pokojowy - wszystkie</td><td>29.88%</td><td>26.19%</td><td>3.49%</td><td>0.19%</td><td>--</td><td>--</td></tr>\n      </tbody></table>",
					wheelTitle: "Kręcenie kołem...",
				},
			},
		};
		var U = M[z.language in M ? z.language : "pl"];
		function I(e) {
			if (!Number.isFinite(e) && null != e) {
				const t = e.replace(/\./g, "").match(/-?\d+/);
				return t ? Number(t[0]) : null;
			}
			return e;
		}
		function K(e) {
			return e.indexOf("?") > -1
				? new URLSearchParams(e.substring(e.indexOf("?")))
				: new URLSearchParams(e);
		}
		var W = {
			toNumber: I,
			numberToPrettyString: function (e, t = null) {
				return t && e > t
					? `${Math.round(e / 1e3)}k`
					: e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
			},
			numberToPrettyPercentage: function (e) {
				return Number.isNaN(e) ? "0.00%" : `${(100 * e).toFixed(2)}%`;
			},
			query: K(window.location.search),
			queryString: K,
			coordsToCoordList: function (e) {
				const t = e.match(/(\d{1,3}\|\d{1,3})(?!.*(\d{1,3}\|\d{1,3}))/);
				if (t) {
					const e = t[0].split("|");
					return [I(e[0]), I(e[1])];
				}
				return [0, 0];
			},
			copyToClipboard: function (e) {
				const t = document.createElement("textarea");
				(t.value = e),
					t.setAttribute("readonly", ""),
					(t.style.position = "absolute"),
					(t.style.left = "-9999px"),
					document.body.appendChild(t);
				const a =
					document.getSelection().rangeCount > 0 &&
					document.getSelection().getRangeAt(0);
				t.select(),
					document.execCommand("copy"),
					document.body.removeChild(t),
					a &&
						(document.getSelection().removeAllRanges(),
						document.getSelection().addRange(a));
			},
			calculateDistance: function (e, t) {
				return Math.sqrt(
					Math.abs(e[0] - t[0]) ** 2 + Math.abs(e[1] - t[1]) ** 2
				);
			},
		};
		const R = {
			conquestProtection:
				"/img/premium/relics/icons/buffs-viewer/peace-treaty-newbie-phase2.png",
			attackProtection:
				"/img/premium/relics/icons/buffs-viewer/peace-treaty-newbie-phase1.png",
			treatyActive:
				"/img/premium/relics/icons/buffs-viewer/peace-treaty.png",
			delete: "/img/ico_delete.png",
			dotGrey: "/img/dots/grey.png",
			dotRed: "/img/dots/red.png",
			dotGreen: "/img/dots/green.png",
			arrow: "/img/arrow_right_raquo.png",
			attack: "/img/command/attack.png",
			support: "/img/command/support.png",
			espy: "/img/command/espy.png",
			stone: "/img/res2.png",
			wood: "/img/res1.png",
			iron: "/img/res3.png",
			village: "/img/shortcut/village.png",
			edit: "/img/edit.png",
			forum: "/img-layouts/_widget_day/widget_icon_2.png",
			noUnit: j.image.noUnit,
			editImage: "/img/messages/edit_image.gif",
			mailUnread: "/img/messages/mail_unread.png",
			reportMisc: "/img/report/misc.png",
			help: "/img-layouts/_widget_day/widget_icon_1.png",
			invalid: "/img/premium/map/relocation-field-invalid.png",
			description: j.image.description,
			spinner: j.image.spinner,
			chains: j.image.chains,
			buildings: {
				main: "/img/buildings/main.png",
				stone: "/img/buildings/stone.png",
				wood: "/img/buildings/wood.png",
				iron: "/img/buildings/iron.png",
				storage: "/img/buildings/storage.png",
				hide: "/img/buildings/hide.png",
				farm: "/img/buildings/farm.png",
				barracks: "/img/buildings/barracks.png",
				wall: "/img/buildings/wall.png",
				stable: "/img/buildings/stable.png",
				market: "/img/buildings/market.png",
				garage: "/img/buildings/garage.png",
				snob: "/img/buildings/snob.png",
				smith: "/img/buildings/smith.png",
				statue: "/img/buildings/statue.png",
			},
			units: {
				farmer: "/img/units/unit_farmer.png",
				sword: "/img/units/unit_sword.png",
				spear: "/img/units/unit_spear.png",
				axe: "/img/units/unit_axe.png",
				bow: "/img/units/unit_bow.png",
				spy: "/img/units/unit_spy.png",
				light: "/img/units/unit_light.png",
				heavy: "/img/units/unit_heavy.png",
				ram: "/img/units/unit_ram.png",
				kata: "/img/units/unit_kata.png",
				snob: "/img/units/unit_snob.png",
			},
		};
		var E = {
			raw: R,
			$spinner: (e = "17px", t = "#070f39") =>
				o(
					`<span style="stroke: ${t}; width: ${e};">${j.image.spinner}</span>`
				),
			$cancel: (e = "click") =>
				o(
					`<img class="${e}" src="${R.delete}" title="${U.cancelNoReload}">`
				),
			$dotGrey: (e = "kcs_dot_button") =>
				o(`<img class="${e}" src="${R.dotGrey}">`),
			$dotRed: (e = "click kcs_dot_button") =>
				o(`<img class="${e}" src="${R.dotRed}">`),
			$dotGreen: (e = "click kcs_dot_button") =>
				o(`<img class="${e}" src="${R.dotGreen}">`),
			$mailUnread: (e = "") =>
				o(`<img class="${e}" src="${R.mailUnread}">`),
			$chains: (e, t = "click kcs_chains") => {
				const a = o(
					`<div class="${t}" title="${U.copyCoordsToClipboard}"></div>`
				);
				return a.click(() => W.copyToClipboard(e)), a;
			},
			$arrow: (e = "") =>
				o(`<img class="${e}" src="img/arrow_right_raquo.png">`),
			$chained: (e = "click kcs_chained") =>
				o(`<div class="${e}"></div>`),
			$attack: (e = "") => o(`<img class="${e}" src="${R.attack}">`),
			$support: (e = "") => o(`<img class="${e}" src="${R.support}">`),
			$espy: (e = "") => o(`<img class="${e}" src="${R.espy}">`),
			$stone: (e = "") => o(`<img class="${e}" src="${R.stone}">`),
			$wood: (e = "") => o(`<img class="${e}" src="${R.wood}">`),
			$iron: (e = "") => o(`<img class="${e}" src="${R.iron}">`),
			$village: (e = "") => o(`<img class="${e}" src="${R.village}">`),
			$edit: (e = "") => o(`<img class="${e}" src="${R.edit}">`),
			$forum: (e = "") => o(`<img class="${e}" src="${R.forum}">`),
			$help: (e = "") => o(`<img class="${e}" src="${R.help}">`),
			$invalid: (e = "") => o(`<img class="${e}" src="${R.invalid}">`),
			$description: (e = "") =>
				o(`<img class="${e}" src="${R.description}">`),
			$conquestProtection: (e = "") =>
				o(`<img class="${e}" src="${R.conquestProtection}">`),
			$attackProtection: (e = "") =>
				o(`<img class="${e}" src="${R.attackProtection}">`),
		};
		var O = {
			type: {
				main: {
					name: "main",
					points: 20,
					image: E.raw.buildings.main,
					levels: 50,
					cost: [
						[85, 70, 65, 2],
						[99, 82, 76, 0],
						[116, 95, 88, 1],
						[136, 111, 103, 0],
						[159, 129, 120, 0],
						[186, 150, 139, 1],
						[218, 175, 163, 0],
						[255, 204, 189, 0],
						[298, 238, 221, 1],
						[349, 277, 257, 1],
						[409, 322, 299, 0],
						[478, 376, 349, 1],
						[559, 438, 406, 1],
						[654, 510, 473, 1],
						[766, 594, 551, 1],
						[896, 692, 642, 1],
						[1048, 806, 748, 1],
						[1226, 939, 872, 2],
						[1435, 1094, 1016, 1],
						[1679, 1274, 1183, 2],
						[1964, 1485, 1379, 2],
						[2298, 1730, 1606, 3],
						[2688, 2015, 1871, 2],
						[3146, 2347, 2180, 3],
						[3680, 2735, 2539, 3],
						[4306, 3186, 2958, 4],
						[5038, 3712, 3447, 4],
						[5894, 4324, 4015, 5],
						[6896, 5038, 4678, 5],
						[8069, 5869, 5450, 5],
						[9440, 6837, 6349, 7],
						[11045, 7965, 7396, 7],
						[12923, 9280, 8617, 8],
						[15120, 10811, 10039, 9],
						[17690, 12594, 11695, 10],
						[20698, 14673, 13625, 12],
						[24216, 17094, 15873, 12],
						[28333, 19914, 18492, 14],
						[33150, 23200, 21543, 16],
						[38785, 27028, 25097, 18],
						[45379, 31487, 29238, 20],
						[53093, 36683, 34062, 22],
						[62119, 42735, 39683, 25],
						[72679, 49787, 46230, 28],
						[85035, 58001, 53858, 32],
						[99491, 67572, 62745, 35],
						[116404, 78721, 73098, 39],
						[136193, 91710, 85159, 44],
						[159346, 106842, 99211, 50],
						[186434, 124471, 115580, 55],
					],
				},
				stone: {
					name: "stone",
					points: 20,
					image: E.raw.buildings.stone,
					levels: 50,
					cost: [
						[40, 30, 55, 5],
						[47, 35, 64, 1],
						[55, 41, 75, 0],
						[64, 47, 87, 1],
						[75, 55, 101, 0],
						[88, 64, 118, 1],
						[103, 75, 138, 1],
						[120, 87, 160, 1],
						[140, 102, 187, 1],
						[164, 119, 217, 1],
						[192, 138, 253, 1],
						[225, 161, 295, 1],
						[263, 188, 344, 2],
						[308, 218, 400, 1],
						[360, 254, 467, 2],
						[422, 296, 544, 2],
						[493, 345, 633, 2],
						[577, 402, 738, 2],
						[675, 469, 859, 3],
						[790, 546, 1001, 3],
						[924, 636, 1166, 3],
						[1081, 741, 1359, 3],
						[1265, 864, 1583, 4],
						[1480, 1006, 1844, 4],
						[1732, 1172, 2149, 4],
						[2026, 1365, 2503, 5],
						[2371, 1591, 2916, 6],
						[2774, 1853, 3398, 6],
						[3245, 2159, 3958, 6],
						[3797, 2515, 4611, 7],
						[4443, 2930, 5372, 8],
						[5198, 3414, 6258, 9],
						[6081, 3977, 7291, 10],
						[7115, 4633, 8494, 10],
						[8325, 5398, 9896, 12],
						[9740, 6288, 11528, 13],
						[11396, 7326, 13431, 14],
						[13333, 8535, 15647, 15],
						[15600, 9943, 18228, 17],
						[18252, 11583, 21236, 19],
						[21355, 13495, 24740, 20],
						[24985, 15721, 28822, 23],
						[29233, 18315, 33578, 25],
						[34202, 21337, 39118, 27],
						[40016, 24858, 45573, 30],
						[46819, 28959, 53092, 33],
						[54778, 33738, 61852, 37],
						[64091, 39304, 72058, 40],
						[74986, 45789, 83947, 44],
						[87734, 53345, 97799, 49],
					],
				},
				wood: {
					name: "wood",
					points: 20,
					image: E.raw.buildings.wood,
					levels: 50,
					cost: [
						[55, 30, 40, 5],
						[64, 35, 47, 1],
						[75, 41, 54, 0],
						[88, 47, 63, 1],
						[103, 55, 74, 0],
						[121, 64, 86, 1],
						[141, 75, 100, 1],
						[165, 87, 117, 1],
						[193, 102, 136, 1],
						[226, 119, 158, 1],
						[264, 138, 184, 1],
						[309, 161, 215, 1],
						[362, 188, 250, 2],
						[423, 218, 291, 1],
						[495, 254, 339, 2],
						[580, 296, 395, 2],
						[678, 345, 461, 2],
						[793, 402, 537, 2],
						[928, 469, 625, 3],
						[1086, 546, 728, 3],
						[1271, 636, 848, 3],
						[1487, 741, 988, 3],
						[1740, 864, 1151, 4],
						[2035, 1006, 1341, 4],
						[2381, 1172, 1563, 4],
						[2786, 1365, 1821, 5],
						[3260, 1591, 2121, 6],
						[3814, 1853, 2471, 6],
						[4462, 2159, 2879, 6],
						[5221, 2515, 3354, 7],
						[6109, 2930, 3907, 8],
						[7147, 3414, 4552, 9],
						[8362, 3977, 5303, 10],
						[9784, 4633, 6178, 10],
						[11447, 5398, 7197, 12],
						[13393, 6288, 8384, 13],
						[15669, 7326, 9768, 14],
						[18333, 8535, 11379, 15],
						[21450, 9943, 13257, 17],
						[25096, 11583, 15444, 19],
						[29363, 13495, 17993, 20],
						[34354, 15721, 20962, 23],
						[40195, 18315, 24420, 25],
						[47028, 21337, 28450, 27],
						[55023, 24858, 33144, 30],
						[64376, 28959, 38612, 33],
						[75320, 33738, 44983, 37],
						[88125, 39304, 52406, 40],
						[103106, 45789, 61053, 44],
						[120634, 53345, 71126, 49],
					],
				},
				iron: {
					name: "iron",
					points: 20,
					image: E.raw.buildings.iron,
					levels: 50,
					cost: [
						[55, 40, 30, 5],
						[64, 47, 35, 1],
						[75, 54, 41, 0],
						[88, 63, 47, 1],
						[103, 74, 55, 0],
						[121, 86, 64, 1],
						[141, 100, 75, 1],
						[165, 117, 87, 1],
						[193, 136, 102, 1],
						[226, 158, 119, 1],
						[264, 184, 138, 1],
						[309, 215, 161, 1],
						[362, 250, 188, 2],
						[423, 291, 218, 1],
						[495, 339, 254, 2],
						[580, 395, 296, 2],
						[678, 461, 345, 2],
						[793, 537, 402, 2],
						[928, 625, 469, 3],
						[1086, 728, 546, 3],
						[1271, 848, 636, 3],
						[1487, 988, 741, 3],
						[1740, 1151, 864, 4],
						[2035, 1341, 1006, 4],
						[2381, 1563, 1172, 4],
						[2786, 1821, 1365, 5],
						[3260, 2121, 1591, 6],
						[3814, 2471, 1853, 6],
						[4462, 2879, 2159, 6],
						[5221, 3354, 2515, 7],
						[6109, 3907, 2930, 8],
						[7147, 4552, 3414, 9],
						[8362, 5303, 3977, 10],
						[9784, 6178, 4633, 10],
						[11447, 7197, 5398, 12],
						[13393, 8384, 6288, 13],
						[15669, 9768, 7326, 14],
						[18333, 11379, 8535, 15],
						[21450, 13257, 9943, 17],
						[25096, 15444, 11583, 19],
						[29363, 17993, 13495, 20],
						[34354, 20962, 15721, 23],
						[40195, 24420, 18315, 25],
						[47028, 28450, 21337, 27],
						[55023, 33144, 24858, 30],
						[64376, 38612, 28959, 33],
						[75320, 44983, 33738, 37],
						[88125, 52406, 39304, 40],
						[103106, 61053, 45789, 44],
						[120634, 71126, 53345, 49],
					],
				},
				storage: {
					name: "storage",
					points: 20,
					image: E.raw.buildings.storage,
					levels: 50,
					cost: [
						[43, 40, 35, 0],
						[50, 47, 41, 0],
						[59, 54, 48, 0],
						[69, 63, 55, 0],
						[81, 74, 64, 0],
						[94, 86, 75, 0],
						[110, 100, 88, 0],
						[129, 117, 102, 0],
						[151, 136, 119, 0],
						[177, 158, 138, 0],
						[207, 184, 161, 0],
						[242, 215, 188, 0],
						[283, 250, 219, 0],
						[331, 291, 255, 0],
						[387, 339, 297, 0],
						[453, 395, 346, 0],
						[530, 461, 403, 0],
						[620, 537, 469, 1],
						[726, 625, 547, 0],
						[849, 728, 637, 0],
						[994, 848, 742, 0],
						[1162, 988, 865, 0],
						[1360, 1151, 1007, 0],
						[1591, 1341, 1174, 0],
						[1862, 1563, 1367, 0],
						[2178, 1821, 1593, 0],
						[2549, 2121, 1856, 0],
						[2982, 2471, 2162, 0],
						[3489, 2879, 2519, 0],
						[4082, 3354, 2934, 1],
						[4776, 3907, 3419, 0],
						[5588, 4552, 3983, 0],
						[6538, 5303, 4640, 0],
						[7649, 6178, 5405, 0],
						[8949, 7197, 6297, 1],
						[10471, 8384, 7336, 0],
						[12251, 9768, 8547, 0],
						[14333, 11379, 9957, 0],
						[16770, 13257, 11600, 1],
						[19621, 15444, 13514, 0],
						[22956, 17993, 15744, 1],
						[26859, 20962, 18341, 0],
						[31425, 24420, 21368, 0],
						[36767, 28450, 24893, 1],
						[43018, 33144, 29001, 1],
						[50331, 38612, 33786, 0],
						[58887, 44983, 39361, 1],
						[68898, 52406, 45855, 1],
						[80610, 61053, 53421, 1],
						[94314, 71126, 62236, 1],
					],
				},
				hide: {
					name: "hide",
					points: 10,
					image: E.raw.buildings.hide,
					levels: 30,
					cost: [
						[50, 40, 40, 1],
						[59, 47, 47, 0],
						[68, 54, 54, 0],
						[80, 63, 63, 1],
						[94, 74, 74, 0],
						[110, 86, 86, 0],
						[128, 100, 100, 0],
						[150, 117, 117, 1],
						[176, 136, 136, 0],
						[205, 158, 158, 1],
						[240, 184, 184, 0],
						[281, 215, 215, 1],
						[329, 250, 250, 0],
						[385, 291, 291, 1],
						[450, 339, 339, 1],
						[527, 395, 395, 1],
						[617, 461, 461, 1],
						[721, 537, 537, 2],
						[844, 625, 625, 1],
						[987, 728, 728, 2],
						[1155, 848, 848, 2],
						[1352, 988, 988, 3],
						[1581, 1151, 1151, 3],
						[1850, 1341, 1341, 3],
						[2165, 1563, 1563, 4],
						[2533, 1821, 1821, 4],
						[2963, 2121, 2121, 5],
						[3467, 2471, 2471, 6],
						[4057, 2879, 2879, 6],
						[4746, 3354, 3354, 8],
					],
				},
				farm: {
					name: "farm",
					points: 10,
					image: E.raw.buildings.farm,
					levels: 50,
					cost: [
						[65, 50, 50, 0],
						[76, 58, 58, 0],
						[89, 68, 67, 0],
						[104, 79, 78, 0],
						[122, 92, 91, 0],
						[143, 107, 105, 0],
						[167, 125, 122, 0],
						[195, 146, 141, 0],
						[228, 170, 164, 0],
						[267, 198, 190, 0],
						[312, 230, 221, 0],
						[366, 268, 256, 0],
						[428, 313, 297, 0],
						[500, 364, 344, 0],
						[585, 424, 399, 0],
						[685, 494, 463, 0],
						[801, 576, 537, 0],
						[938, 671, 623, 0],
						[1097, 781, 723, 0],
						[1284, 910, 839, 0],
						[1502, 1060, 973, 0],
						[1757, 1235, 1129, 0],
						[2056, 1439, 1309, 0],
						[2405, 1677, 1519, 0],
						[2814, 1953, 1762, 0],
						[3293, 2276, 2044, 0],
						[3853, 2651, 2371, 0],
						[4507, 3089, 2750, 0],
						[5274, 3598, 3190, 0],
						[6170, 4192, 3700, 0],
						[7219, 4884, 4292, 0],
						[8446, 5689, 4979, 0],
						[9882, 6628, 5776, 0],
						[11562, 7722, 6700, 0],
						[13528, 8996, 7772, 0],
						[15828, 10480, 9016, 0],
						[18518, 12210, 10458, 0],
						[21667, 14224, 12132, 0],
						[25350, 16571, 14073, 0],
						[29659, 19306, 16324, 0],
						[34701, 22491, 18936, 0],
						[40601, 26202, 21966, 0],
						[47503, 30525, 25480, 0],
						[55578, 35562, 29557, 0],
						[65027, 41430, 34286, 0],
						[76081, 48265, 39772, 0],
						[89015, 56229, 46136, 0],
						[104148, 65507, 53517, 0],
						[121853, 76316, 62080, 0],
						[142568, 88908, 72013, 0],
					],
				},
				barracks: {
					name: "barracks",
					points: 20,
					image: E.raw.buildings.barracks,
					levels: 30,
					cost: [
						[180, 180, 120, 6],
						[221, 218, 146, 1],
						[272, 264, 179, 1],
						[335, 319, 218, 2],
						[412, 386, 266, 1],
						[507, 467, 324, 2],
						[623, 565, 396, 2],
						[767, 684, 483, 3],
						[943, 827, 589, 3],
						[1160, 1001, 718, 4],
						[1427, 1211, 877, 4],
						[1755, 1465, 1069, 5],
						[2158, 1773, 1305, 5],
						[2655, 2145, 1592, 7],
						[3265, 2596, 1942, 8],
						[4017, 3141, 2369, 9],
						[4940, 3800, 2890, 11],
						[6077, 4599, 3526, 13],
						[7474, 5564, 4302, 14],
						[9193, 6733, 5248, 17],
						[11308, 8147, 6403, 21],
						[13908, 9857, 7812, 23],
						[17107, 11928, 9530, 28],
						[21042, 14432, 11627, 32],
						[25882, 17463, 14185, 38],
						[31835, 21130, 17305, 44],
						[39157, 25568, 21112, 52],
						[48163, 30937, 25757, 60],
						[59240, 37434, 31424, 71],
						[72865, 45295, 38337, 83],
					],
				},
				wall: {
					name: "wall",
					points: 20,
					image: E.raw.buildings.wall,
					levels: 20,
					cost: [
						[60, 40, 30, 4],
						[70, 47, 35, 1],
						[82, 54, 40, 1],
						[96, 63, 47, 1],
						[112, 74, 54, 1],
						[132, 86, 63, 2],
						[154, 100, 73, 2],
						[180, 117, 85, 2],
						[211, 136, 98, 3],
						[247, 158, 114, 4],
						[288, 184, 132, 4],
						[337, 215, 154, 5],
						[395, 250, 178, 6],
						[462, 291, 207, 7],
						[540, 339, 240, 8],
						[632, 395, 278, 11],
						[740, 461, 322, 12],
						[866, 537, 374, 15],
						[1013, 625, 434, 17],
						[1185, 728, 503, 22],
					],
				},
				stable: {
					name: "stable",
					points: 10,
					image: E.raw.buildings.stable,
					levels: 30,
					cost: [
						[240, 200, 220, 10],
						[281, 233, 255, 1],
						[329, 271, 296, 1],
						[384, 316, 343, 1],
						[450, 368, 398, 2],
						[526, 429, 462, 1],
						[616, 500, 536, 2],
						[720, 583, 622, 1],
						[843, 679, 721, 2],
						[986, 791, 837, 3],
						[1154, 921, 971, 2],
						[1350, 1073, 1126, 3],
						[1579, 1250, 1306, 2],
						[1848, 1456, 1515, 4],
						[2162, 1697, 1757, 3],
						[2529, 1977, 2038, 4],
						[2959, 2303, 2365, 4],
						[3462, 2683, 2743, 5],
						[4051, 3125, 3182, 5],
						[4740, 3641, 3691, 5],
						[5545, 4242, 4281, 6],
						[6488, 4942, 4966, 7],
						[7591, 5757, 5761, 7],
						[8881, 6707, 6683, 9],
						[10391, 7814, 7752, 8],
						[12158, 9103, 8992, 10],
						[14225, 10605, 10431, 11],
						[16643, 12355, 12100, 12],
						[19472, 14393, 14036, 13],
						[22782, 16768, 16282, 15],
					],
				},
				market: {
					name: "market",
					points: 20,
					image: E.raw.buildings.market,
					levels: 30,
					cost: [
						[100, 80, 70, 10],
						[117, 93, 81, 2],
						[137, 109, 94, 2],
						[160, 126, 109, 2],
						[187, 147, 127, 3],
						[219, 172, 147, 3],
						[257, 200, 171, 4],
						[300, 233, 198, 4],
						[351, 271, 229, 5],
						[411, 316, 266, 6],
						[481, 368, 309, 7],
						[562, 429, 358, 8],
						[658, 500, 416, 10],
						[770, 583, 482, 11],
						[901, 679, 559, 13],
						[1054, 791, 649, 15],
						[1233, 921, 752, 18],
						[1443, 1073, 873, 21],
						[1688, 1250, 1012, 25],
						[1975, 1456, 1174, 28],
						[2311, 1697, 1362, 34],
						[2703, 1977, 1580, 39],
						[3163, 2303, 1833, 46],
						[3701, 2683, 2126, 54],
						[4330, 3125, 2467, 63],
						[5066, 3641, 2861, 74],
						[5927, 4242, 3319, 86],
						[6935, 4942, 3850, 100],
						[8113, 5757, 4466, 118],
						[9493, 6707, 5181, 138],
					],
				},
				garage: {
					name: "garage",
					points: 20,
					image: E.raw.buildings.garage,
					levels: 5,
					cost: [
						[400, 600, 500, 50],
						[468, 699, 580, 20],
						[548, 814, 673, 28],
						[641, 949, 780, 39],
						[750, 1105, 905, 55],
					],
				},
				snob: {
					name: "snob",
					points: 100,
					image: E.raw.buildings.snob,
					levels: 10,
					cost: [
						[3e4, 25e3, 25e3, 100],
						[39e3, 32500, 32500, 20],
						[50700, 42250, 42250, 24],
						[65910, 54925, 54925, 29],
						[85683, 71403, 71403, 34],
						[111388, 92823, 92823, 42],
						[144804, 120670, 120670, 50],
						[188246, 156871, 156871, 59],
						[244719, 203933, 203933, 72],
						[318135, 265112, 265112, 86],
					],
				},
				smith: {
					name: "smith",
					points: 40,
					image: E.raw.buildings.smith,
					levels: 5,
					cost: [
						[4e3, 3e3, 2500, 25],
						[5600, 4200, 3500, 5],
						[7840, 5880, 4900, 6],
						[10976, 8232, 6860, 7],
						[15366, 11525, 9604, 9],
					],
				},
				statue: {
					name: "statue",
					points: 1e3,
					image: E.raw.buildings.statue,
					levels: 1,
					cost: [[4e5, 4e5, 4e5, 0]],
				},
			},
		};
		const P = {
			keys: {
				quickSendUnits: "kcs_quickSendUnits",
				multiSendOptions: "kcs_multiSendOptions",
				serverSpeed: "kcs_serverSpeed",
				barracksAutoRecruit: "kcs_barracksAutoRecruit",
				castleAutoBuild: "kcs_castleAutoBuild",
				marketQuickAmounts: "kcs_marketQuickAmounts",
				sessionRetrievalTime: "kcs_sessionRetrievalTime",
				attackSession: "kcs_attackSession",
				gameSession: "kcs_gameSession",
				password: "kcs_password",
				username: "kcs_username",
				attackTarget: "kcs_attackTarget",
				torMode: "kcs_torMode",
				lastMarketCoords: "kcs_lastMarketCoords",
				lastArmySendCoords: "kcs_lastArmySendCoords",
				marketSendBack: "kcs_marketSendBack",
				buildingsOverviewWarn: "kcs_buildingsOverviewWarn",
				barracksTemplates: "kcs_barracksTemplates",
				defaultCatapultTarget: "kcs_defaultCatapultTarget",
				ownMarketOffers: "kcs_ownMarketOffers",
				attacksAreSupport: "kcs_attacksAreSupport",
				serverNightBonus: "kcs_serverNightBonus",
				memberOnlineWatcher: "kcs_memberOnlineWatcher",
				savedVillage: "kcs_savedVillage",
				serverCount: "kcs_serverCount",
				attacksHistory: "kcs_attacksHistory",
				lastVisited: "kcs_lastVisited",
				planerSupport: "kcs_planerSupport",
				planerTarget: "kcs_planerTarget",
				mapNotes: "kcs_mapNotes",
				mapUnitRange: "kcs_mapUnitRange",
				mapGroups: "kcs_mapGroups",
				mapSettings: "kcs_mapSettings",
				serverConquestProtection: "kcs_serverConquestProtection",
				serversPerStep: "kcs_serversPerStep",
				attackCount: "kcs_attackCount",
				barracksQuickCoords: "kcs_barracksQuickCoords",
				wheelStrategy: "kcs_wheelStrategy",
				wheelOptions: "kcs_wheelOptions",
				stoneAttackTimestamp: "kcs_stoneAttackTimestamp",
				planerHistory: "kcs_planerHistory",
				playServer: "kcs_playServer",
				timestampCheckpoints: "kcs_timestampCheckpoints",
				attacksOptions: "kcs_attacksOptions",
				rallyPoint: "kcs_rallyPoint",
				signAttackTimestamp: "kcs_signAttackTimestamp",
			},
			getItem: (e) => JSON.parse(window.localStorage.getItem(e)),
			setItem: (e, t = null) => {
				!t || (t.constructor === Object && 0 === Object.keys(t).length)
					? window.localStorage.removeItem(e)
					: window.localStorage.setItem(e, JSON.stringify(t));
			},
			getComplexItem: (e, t) => {
				const a = P.getItem(e);
				return "object" == typeof a && null !== a && a[t] ? a[t] : null;
			},
			setComplexItem: (e, t, a) => {
				let i = P.getItem(e);
				("object" == typeof i && null !== i) || (i = {}),
					a.constructor === Object && 0 === Object.keys(a).length
						? i[t] && delete i[t]
						: a
						? (i[t] = a)
						: i[t] && delete i[t],
					P.setItem(e, i);
			},
		};
		var F = P;
		function D(...e) {
			let t = "",
				a = e;
			"string" == typeof e[0] && ((t = ` ${e[0]}`), (a = e.slice(1))),
				console.log(
					`[${new Date().toLocaleTimeString("pl-PL")}]${t}`,
					...a
				);
		}
		let N = 0;
		async function J(e, t, a = null) {
			let i = a;
			a || ((N += 1), (i = N));
			try {
				return await o.ajax(t);
			} catch (a) {
				if (e > 0) return J(e - 1, t, i);
			}
			return D(`Timeout reached for id: ${i}, with params: `, t), null;
		}
		async function Z(e) {
			const t = { ...e };
			return "timeout" in t || (t.timeout = 15e3), J(5, t);
		}
		async function Y(e, t) {
			const a = [];
			for (let i = 0; i < e; i += 1) a.push(Z(t));
			return Promise.all([...a]);
		}
		var Q = {
			multiSend: Y,
			$spawnMultiSendRange: function (e, t, a) {
				const i = o('<span class="kcs_small_text"></span>'),
					n = Object.values(e);
				return (
					n.forEach((e, s) => {
						const r = o(`<span class="click">${e}</span>`);
						i.append(r),
							s < n.length - 1 && i.append("/"),
							r.click(async () => {
								const i = E.$spinner("6px");
								r.hide().after(i),
									await Y(e, t),
									i.remove(),
									r.show(),
									a && (window.location.href = a);
							});
					}),
					i.prepend("[").append("]")
				);
			},
			ajax: Z,
			log: D,
			safeRequestWaitTimeInMiliseconds: function (e) {
				return e < 30 ? 10 : e < 100 ? 270 : e < 250 ? 710 : 960;
			},
		};
		let V, L, G;
		var H = {
			speed: async function () {
				const e = F.getItem(F.keys.serverSpeed);
				if (e) return e;
				V || (V = Q.ajax({ url: "help.php?m=worldinfo" }));
				const t = o(await V)
						.find("table.borderlist")
						.eq(0)
						.children()
						.eq(0)
						.children(),
					a = {
						world: W.toNumber(t.eq(1).children().eq(1).text()),
						travel: W.toNumber(t.eq(2).children().eq(1).text()),
					};
				return F.setItem(F.keys.serverSpeed, a), a;
			},
			nightBonus: async function () {
				const e = F.getItem(F.keys.serverNightBonus);
				if (e) return e;
				L || (L = Q.ajax({ url: "help.php?m=worldinfo" }));
				const t = o(await L)
						.find("table.borderlist")
						.eq(0)
						.children()
						.eq(0)
						.children()
						.eq(10)
						.children()
						.eq(1)
						.text()
						.match(/(\d:\d*)/g),
					a = [];
				t.forEach((e) =>
					e.split(":").forEach((e) => a.push(W.toNumber(e)))
				);
				const i = {
					startHour: a[0],
					startMinute: a[1],
					endHour: a[2],
					endMinute: a[3],
				};
				return F.setItem(F.keys.serverNightBonus, i), i;
			},
			conquestProtection: async function () {
				const e = F.getItem(F.keys.serverConquestProtection);
				if (e) return e;
				G || (G = Q.ajax({ url: "help.php?m=worldinfo" }));
				const t = o(await G)
						.find("table.borderlist")
						.eq(0)
						.children()
						.eq(0)
						.children(),
					a = t.eq(7).children().eq(1).text().split(" "),
					i = t.eq(6).children().eq(1).text().split(" ");
				let n;
				return (
					(n =
						a[1] === i[1]
							? W.toNumber(a[0])
							: 30 * W.toNumber(a[0])),
					F.setItem(F.keys.serverConquestProtection, n),
					n
				);
			},
			id: W.toNumber(
				document.URL.substring(
					document.URL.indexOf("://") + 4,
					document.URL.indexOf("-")
				)
			),
		};
		const X = {
			farmer: {
				name: "farmer",
				runtime: 20,
				image: E.raw.units.farmer,
				bbCode: "[img_farmer]",
				cost: [3, 10, 7, 1],
				points: 0.221,
				carry: 5,
			},
			sword: {
				name: "sword",
				runtime: 22,
				image: E.raw.units.sword,
				bbCode: "[img_sword]",
				cost: [30, 10, 80, 1],
				points: 0.221,
				carry: 15,
			},
			spear: {
				name: "spear",
				runtime: 18,
				image: E.raw.units.spear,
				bbCode: "[img_spear]",
				cost: [10, 20, 30, 1],
				points: 0.221,
				carry: 25,
			},
			axe: {
				name: "axe",
				runtime: 18,
				image: E.raw.units.axe,
				bbCode: "[img_axe]",
				cost: [40, 50, 50, 1],
				points: 0.221,
				carry: 10,
			},
			bow: {
				name: "bow",
				runtime: 18,
				image: E.raw.units.bow,
				bbCode: "[img_bow]",
				cost: [80, 160, 80, 1],
				points: 0.221,
				carry: 10,
			},
			spy: {
				name: "spy",
				runtime: 9,
				image: E.raw.units.spy,
				bbCode: "[img_spy]",
				cost: [40, 60, 60, 2],
				points: 0.442,
				carry: 0,
			},
			light: {
				name: "light",
				runtime: 10,
				image: E.raw.units.light,
				bbCode: "[img_light]",
				cost: [100, 100, 300, 4],
				points: 0.884,
				carry: 80,
			},
			heavy: {
				name: "heavy",
				runtime: 11,
				image: E.raw.units.heavy,
				bbCode: "[img_heavy]",
				cost: [100, 300, 500, 6],
				points: 1.326,
				carry: 50,
			},
			ram: {
				name: "ram",
				runtime: 30,
				image: E.raw.units.ram,
				bbCode: "[img_ram]",
				cost: [100, 500, 200, 5],
				points: 1.105,
				carry: 0,
			},
			kata: {
				name: "kata",
				runtime: 30,
				image: E.raw.units.kata,
				bbCode: "[img_kata]",
				cost: [200, 600, 200, 8],
				points: 1.768,
				carry: 0,
			},
			snob: {
				name: "snob",
				runtime: 35,
				image: E.raw.units.snob,
				bbCode: "[img_snob]",
				cost: [1e5, 12e4, 8e4, 100],
				points: 22.1,
				carry: 0,
			},
		};
		function ee(e) {
			let t = X.spy.name;
			return (
				e.forEach((e) => {
					X[e].runtime > X[t].runtime && (t = e);
				}),
				t
			);
		}
		const te = {
				attack: {
					name: "attack",
					text: U.actions.attack,
					$image: (e) => E.$attack(e),
				},
				support: {
					name: "support",
					text: U.actions.support,
					$image: (e) => E.$support(e),
				},
				espy: {
					name: "espy",
					text: U.actions.espy,
					$image: (e) => E.$espy(e),
				},
			},
			ae = [
				X.spy,
				X.light,
				X.heavy,
				X.axe,
				X.farmer,
				X.sword,
				X.ram,
				X.snob,
			],
			ie = [
				X.spy.image,
				X.light.image,
				X.heavy.image,
				X.axe.image,
				X.farmer.image,
				X.sword.image,
				X.ram.image,
				X.snob.image,
			],
			ne = [
				X.spy.bbCode,
				X.light.bbCode,
				X.heavy.bbCode,
				X.axe.bbCode,
				X.farmer.bbCode,
				X.sword.bbCode,
				X.ram.bbCode,
				X.snob.bbCode,
			],
			se = [
				U.units[X.spy.name],
				U.units[X.light.name],
				U.units[X.heavy.name],
				U.units[X.axe.name],
				U.units[X.farmer.name],
				U.units[X.sword.name],
				U.units[X.ram.name],
				U.units[X.snob.name],
			];
		var re = {
			type: X,
			action: te,
			arrayWithUnitStrsIntoUnitsObj: function (e) {
				return {
					[X.farmer.name]: W.toNumber(e[0]),
					[X.sword.name]: W.toNumber(e[1]),
					[X.spear.name]: W.toNumber(e[2]),
					[X.axe.name]: W.toNumber(e[3]),
					[X.bow.name]: W.toNumber(e[4]),
					[X.spy.name]: W.toNumber(e[5]),
					[X.light.name]: W.toNumber(e[6]),
					[X.heavy.name]: W.toNumber(e[7]),
					[X.ram.name]: W.toNumber(e[8]),
					[X.kata.name]: W.toNumber(e[9]),
					[X.snob.name]: W.toNumber(e[10]),
				};
			},
			slowestUnitInList: ee,
			calculateTravelTimeInSeconds: async function (e, t, a) {
				return Math.round(
					W.calculateDistance(e, t) *
						(X[ee(a)].runtime / (await H.speed()).travel) *
						60
				);
			},
			calculateTravelTimeInSecondsForEveryUnit: async function (e, t) {
				const a = W.calculateDistance(e, t),
					i = (await H.speed()).travel;
				return {
					[X.farmer.name]: Math.round(
						a * (X.farmer.runtime / i) * 60
					),
					[X.sword.name]: Math.round(a * (X.sword.runtime / i) * 60),
					[X.spear.name]: Math.round(a * (X.spear.runtime / i) * 60),
					[X.axe.name]: Math.round(a * (X.axe.runtime / i) * 60),
					[X.bow.name]: Math.round(a * (X.bow.runtime / i) * 60),
					[X.spy.name]: Math.round(a * (X.spy.runtime / i) * 60),
					[X.light.name]: Math.round(a * (X.light.runtime / i) * 60),
					[X.heavy.name]: Math.round(a * (X.heavy.runtime / i) * 60),
					[X.ram.name]: Math.round(a * (X.ram.runtime / i) * 60),
					[X.kata.name]: Math.round(a * (X.kata.runtime / i) * 60),
					[X.snob.name]: Math.round(a * (X.snob.runtime / i) * 60),
				};
			},
			calculateMorale: function (e, t) {
				const a = Math.round((t / e) * 100 * 0.03 * 100 + 30) / 100;
				return a > 1 ? 1 : a <= 0.3 ? 0.3 : a;
			},
			fromHref: function (e) {
				const t = {},
					a = W.queryString(e);
				return (
					Object.keys(X).forEach((e) => {
						const i = a.get(e);
						i && (t[e] = Number(i));
					}),
					t
				);
			},
			isFake: function (e) {
				let t = 0;
				for (const a of Object.keys(e)) t += e[a];
				return !(e.snob > 0 || t > 200);
			},
			getServerAwareRuntime: async function (e) {
				return (e.runtime / (await H.speed()).travel) * 60;
			},
			travelCalculator: async function () {
				const e = (await H.speed()).travel,
					t = [
						(X.spy.runtime / e) * 60 * 1e3,
						(X.light.runtime / e) * 60 * 1e3,
						(X.heavy.runtime / e) * 60 * 1e3,
						(X.axe.runtime / e) * 60 * 1e3,
						(X.farmer.runtime / e) * 60 * 1e3,
						(X.sword.runtime / e) * 60 * 1e3,
						(X.ram.runtime / e) * 60 * 1e3,
						(X.snob.runtime / e) * 60 * 1e3,
					];
				return {
					possibleUnits: function (e, a, i, n) {
						const s = W.calculateDistance(e, a);
						let r = -1;
						for (; r < t.length && ((r += 1), !(s * t[r] >= n)); );
						let o = t.length;
						for (; o > 0 && ((o -= 1), !(s * t[o] <= i)); );
						return [o > r ? o : r, r];
					},
					travelTime: function (e, a, i) {
						return W.calculateDistance(e, a) * t[i];
					},
				};
			},
			travelCalculatorUnitImagesByIndex: ie,
			travelCalculatorUnitNamesByIndex: se,
			travelCalculatorUnitBBCodesByIndex: ne,
			bySpeed: ae,
			nameFromImgSrc: function (e) {
				for (const [t, a] of Object.entries(E.raw.units))
					if (e.match(a)) return t;
				return null;
			},
		};
		const oe = (() => {
				const e = o('<div class="kcs_backlight"></div>');
				return {
					on: (t) => {
						h.find("body").append(e),
							e.one("click", () => {
								t && t(), oe.off();
							});
					},
					off: () => e.remove(),
				};
			})(),
			le = (() => {
				let e,
					t = null,
					a = null;
				function i(a) {
					t.remove(), oe.off(), e(a);
				}
				return {
					show: async function (n, s, ...r) {
						const l = h.find("body");
						return (
							(t = o('<div class="kcs_textbox_boxarea"></div>')),
							(a = o('<div class="kcs_textbox_textarea"></div>')),
							(a = o(
								s
									? '<textarea style="width: 98%; height: 200px;"></textarea>'
									: '<div class="kcs_textbox_textarea"></div>'
							)),
							l.append(t),
							r &&
								r.forEach((e) => {
									e &&
										t.append(
											e,
											'<div style="width: 1px; height: 5px;"></div>'
										);
								}),
							a.html(n),
							t.append(a),
							t.css(
								"margin-left",
								l.prop("scrollWidth") / 2 -
									t.prop("scrollWidth") / 2
							),
							t.css(
								"top",
								t.offset().top +
									document.documentElement.scrollTop
							),
							new Promise((t) => {
								(e = t),
									oe.on(() => {
										i();
									});
							})
						);
					},
					hide: () => i(a.val()),
					text: () =>
						o(
							`<span>${a.html().split("<br>").join("\n")}</span>`
						).text(),
				};
			})();
		var ce = {
			backlight: oe,
			textBox: (e, t = null) =>
				t
					? le.show(
							e,
							!1,
							o(
								`<div style="font-size: 20px; font-variant: all-small-caps; line-height: 23px;">${t}</div>`
							)
					  )
					: le.show(e, !1),
			textCopyBox: (e, t = null, a = null) => {
				const i = o(
					`<span class="kcs_button">${U.copyToClipboard}</span>`
				);
				i.one("click", () => W.copyToClipboard(le.text()));
				let n = null;
				t &&
					(n = o(
						`<div style="font-size: 20px; font-variant: all-small-caps; line-height: 23px;">${t}</div>`
					));
				let s = null;
				return (
					a && (s = o(`<div class="kcs_small_text">${a}</div>`)),
					le.show(e, !1, n, i, s)
				);
			},
			textArmyInputBox: async (e) => {
				const t = o(
						`<span class="kcs_button">${U.importAttacks}</span>`
					),
					a = o('<input type="checkbox" checked>'),
					i = o(
						`<span class="kcs_small_text">${U.snobMixin}: </span>`
					).append(a),
					n = o('<input type="checkbox">'),
					s = o(
						`<span class="kcs_small_text">${U.wholeDaySending}</span>`
					).append(n),
					r = o('<input type="checkbox">'),
					l = o(
						`<span class="kcs_small_text">${U.addSpies}</span>`
					).append(r),
					c = o(
						'<input type="number" min="0" max="99" value="20" style="width: 42px; margin: 1px;">'
					),
					d = o(
						`<span class="kcs_small_text">${U.attacksPerVillage} </span>`
					).append(c),
					p = o('<input type="checkbox">'),
					u = o(
						`<span class="kcs_small_text">${U.onlyThisVillage}</span>`
					).append(p),
					m = o(
						`<span class="kcs_small_text">${U.format} xxx|xxx/fake/01.01.2019/23:59:59<br>${U.types} fake / fast</span>`
					);
				t.one("click", () => le.hide());
				const h = await le.show(e, !0, t, m, i, d, s, l, u);
				return h
					? [
							h.split("\n"),
							a.prop("checked"),
							c.val(),
							n.prop("checked"),
							r.prop("checked"),
							p.prop("checked"),
					  ]
					: [null, null];
			},
		};
		const de = new Date(1e3 * i),
			pe = (e = 0) => new Date(new Date().getTime() + 1e3 * e),
			ue = (e) => e.toLocaleString("pl-PL", { timeZone: z.timezone }),
			me = (e) => ~~(e / 1e3);
		function he() {
			(n.length = 0), (s.length = 0);
		}
		function ge(e) {
			if (e < 1) return "0:00:00";
			const t = Math.floor(e / 3600),
				a = Math.floor((e - 3600 * t) / 60),
				i = Math.ceil(e - 3600 * t - 60 * a);
			return `${t}:${a < 10 ? `0${a}` : a}:${i < 10 ? `0${i}` : i}`;
		}
		function ye(e) {
			return (t = e - pe().getTime()), ge(me(t));
			var t;
		}
		function be(e, t = "") {
			return e - pe().getTime() < 0
				? `<span${t ? ` class="${t}"` : ""} time="${e}">${
						U.timersPassed
				  }</span>`
				: `<span class="kcs_timedown ${t || ""}" time="${e}">${ye(
						e
				  )}</span>`;
		}
		function ke(e) {
			return ue(pe(e));
		}
		function fe(e, t = "") {
			return `<span class="kcs_timeup ${t || ""}" time="${e}">${ke(
				e
			)}</span>`;
		}
		let we = 50;
		setInterval(
			() => (
				h
					.find("span.kcs_timeup")
					.slice(0, we)
					.each((e, t) => {
						const a = o(t);
						a.text(ke(Number(a.attr("time"))));
					}),
				void h
					.find("span.kcs_timedown")
					.slice(0, we)
					.each((e, t) => {
						const a = o(t),
							i = Number(a.attr("time"));
						i - pe().getTime() < 0
							? (a.removeClass("kcs_timedown"),
							  a.text(U.timersPassed))
							: a.text(ye(i));
					})
			),
			1e3
		);
		var Ae = {
				pageLoadDate: de,
				serverDate: pe,
				displayDate: ue,
				convertToKATimestamp: me,
				disableKaTimers: he,
				reloadKaTimers: function (e) {
					he(),
						e.find("span.countdown").each((e, t) => {
							const a = o(t);
							a.attr(
								"time",
								W.toNumber(a.attr("time")) + me(pe() - de)
							),
								a.attr("reload", "false"),
								n.push(t);
						}),
						e.find("div.progress").each((e, t) => {
							s.push(t);
						});
				},
				convertHHMMStringIntoSeconds: function (e) {
					const t = e.split(":");
					return 1 === t.length ? 0 : 60 * +t[0] * 60 + 60 * +t[1];
				},
				convertHHMMSSStringIntoSeconds: function (e) {
					const t = e.split(":");
					return 1 === t.length
						? 0
						: 60 * +t[0] * 60 + 60 * +t[1] + +t[2];
				},
				convertDurationInSecondsIntoHMSString: ge,
				timeUp: fe,
				$timeUp: function (e, t = "") {
					return o(fe(e, t));
				},
				timeUpToString: ke,
				timeDown: be,
				$timeDown: function (e, t = "") {
					return o(be(e, t));
				},
				wait: async function (e) {
					return new Promise((t) => setTimeout(t, e));
				},
				limitAmountUpdated: function (e) {
					we = e;
				},
			},
			ve = (e) => {
				const t = E.$spinner("20px"),
					a = e.find("div.resourceBar").eq(0),
					i = e.find("div.freeSettlers").eq(0);
				let n = e.find("#settlement");
				n.length < 1 && (n = e.siblings("#settlement"));
				const s = e.find("a.widget_icon").eq(2),
					r = e.find("#tower_right"),
					o = e.find("#tower_left");
				function l() {
					return W.toNumber(a.find("#stone").text());
				}
				function c() {
					return W.toNumber(a.find("#wood").text());
				}
				function d() {
					return W.toNumber(a.find("#iron").text());
				}
				function p() {
					return W.toNumber(i.text());
				}
				return {
					update(s) {
						a.after(t),
							a.html(s.find("div.resourceBar").eq(0).html()),
							i.html(s.find("div.freeSettlers").eq(0).html()),
							n.html(s.find("#settlement").html()),
							r.html(s.find("#tower_right").html()),
							o.html(s.find("#tower_left").html()),
							(m[0] = e.find("#stone").get(0)),
							(m[1] = e.find("#wood").get(0)),
							(m[2] = e.find("#iron").get(0)),
							setTimeout(() => t.remove(), 500);
					},
					get id() {
						return W.toNumber(
							W.queryString(s.attr("href")).get("village")
						);
					},
					get coords() {
						return n
							.text()
							.split("|")
							.slice(0, 2)
							.map((e) => W.toNumber(e));
					},
					get name() {
						return n.text().split("|")[2];
					},
					get stone() {
						return l();
					},
					get wood() {
						return c();
					},
					get iron() {
						return d();
					},
					get settlers() {
						return p();
					},
					get resources() {
						return [l(), c(), d(), p()];
					},
					get storage() {
						return W.toNumber(a.find("#stone").attr("max"));
					},
					get units() {
						return re.arrayWithUnitStrsIntoUnitsObj(
							n.text().split("|").slice(5, 16)
						);
					},
				};
			},
			xe = ve(h);
		const $e = W.queryString(window.location.search).get("av"),
			Se = $e ? `&av=${$e}` : "",
			qe =
				h
					.find("#globalBuffs")
					.find('div.buff[style*="premium-account.png"]').length > 0;
		var _e = Se,
			Ce = qe,
			Te = r,
			Be = (e, t) =>
				`??village=${xe.id}&s=map${e ? `&x=${e}` : ""}${
					t ? `&y=${t}` : ""
				}${_e}`,
			je = (e) =>
				`??village=${xe.id}&s=messages&m=forward&id=${e}${_e}`,
			ze = (e) =>
				`??village=${xe.id}&s=messages&m=forward_report&id=${e}${_e}`,
			Me = (e, t) =>
				`??village=${e}&s=build_barracks&m=command&a=sendTroop&p=${t}${_e}`,
			Ue = (e) => `https://${e}.kingsage.gameforge.com`,
			Ie = (e) =>
				`??village=${xe.id}&s=ally&m=attacks${
					e ? `&start=${e}` : ""
				}${_e}`,
			Ke = (e) =>
				`??village=${e}&s=build_barracks&m=command&sub=send${_e}`,
			We = (e) =>
				`??village=${e}&s=build_barracks&m=research&group=0${_e}`,
			Re = (e, t, a) =>
				`??village=${e}&s=tools&m=attack_planer&a=attackPlanerDelete&p=${t}&id=${a}${_e}`,
			Ee = (e) => `??village=${xe.id}&s=info_ally&id=${e}${_e}`,
			Oe = (e) => `??village=${xe.id}&s=info_village&id=${e}${_e}`,
			Pe = () => `??village=${xe.id}&s=build_snob${_e}`,
			Fe = (e) => `??village=${xe.id}&s=info_player&id=${e}${_e}`,
			De = (e = xe.id) =>
				`??village=${e}&s=build_barracks&m=command&group=0${_e}`,
			Ne = () =>
				`??village=${xe.id}&s=build_barracks&m=recruit&group=0${_e}`,
			Je = () =>
				`??village=${xe.id}&s=build_barracks&m=massrecruit&group=0&n=999${_e}`,
			Ze = () =>
				`??village=${xe.id}&s=build_barracks&m=research&group=0${_e}`,
			Ye = (e = xe.id) =>
				`??village=${e}&s=build_main&group=0${_e}`,
			Qe = () =>
				`??village=${xe.id}&s=tools&m=attack_planer&group=0${_e}`,
			Ve = (e = xe.id) =>
				`??village=${e}&s=build_market&group=0${_e}`,
			Le = () =>
				`??village=${xe.id}&s=premium&m=wheelOfFortune${_e}`,
			Ge = () => `??village=${xe.id}&s=premium&m=inventory${_e}`,
			He = () => `??village=${xe.id}&s=premium&m=buyRelics${_e}`,
			Xe = (e) =>
				`??village=${xe.id}&s=ranking${
					e ? `&name=${e}` : ""
				}${_e}`,
			et = () =>
				`??village=${xe.id}&s=overview_villages&m=4&type=away_detail&group=0${_e}`,
			tt = () =>
				`??village=${xe.id}&s=overview_villages&m=7&group=0${_e}`,
			at = () =>
				`??village=${xe.id}&s=overview_villages&m=2&group=0${_e}`,
			it = () =>
				`??village=${xe.id}&s=overview_villages&m=3&type=rec&group=0${_e}`,
			nt = () =>
				`??village=${xe.id}&s=overview_villages&m=5&group=0${_e}`,
			st = () =>
				`??village=${xe.id}&s=overview_villages&m=6&type=all&subtype=all&n=999&group=0${_e}`,
			rt = () =>
				`??village=0&s=build_smith&group=0&m=coining${_e}`,
			ot = () =>
				`??village=${xe.id}&s=overview_villages&m=4&type=all&group=0${_e}`,
			lt = () => `??village=${xe.id}&s=info_player${_e}`,
			ct = () =>
				`zjax.php?func=wheelOfFortune&fclass=game&timer=${Ae.convertToKATimestamp(
					Ae.serverDate()
				)}`,
			dt = () => `??village=${xe.id}&s=ally&m=members${_e}`,
			pt = () => `??village=${xe.id}&s=ally${_e}`,
			ut = () => "??village=0";
		function mt(e, t) {
			return F.setItem(e, t), "string" == typeof t ? t : { ...t };
		}
		function ht(e, t) {
			const a = F.getItem(e);
			return a || mt(e, t);
		}
		let gt = !1;
		function yt(e) {
			e.append(
				`<div class="kcs_settings_header">${U.settings.protectionTimesDownload}</div>`
			);
			const t = o('<div style="height: 30px;"></div>'),
				a = o(
					'<div style="display: inline-block; vertical-align: middle; text-align: center;"></div>'
				),
				i = o(
					`<div style="width: 150px; margin-bottom: 2px;" class="kcs_button">${U.settings.protectionTimesDownloadButton}</div>`
				),
				n = o(
					'<input type="number" min="1" value="1" size="7" style="width: 62px;">'
				);
			a.append(i, U.settings.protectionTimesDownloadIdStart, n),
				t.append(a),
				e.append(t, "<br><hr>"),
				i.one("click", async () => {
					i.addClass("disabled");
					const e = E.$spinner(),
						a = o("<span>-</span>"),
						s = o(
							`<span style="color: red;">${U.settings.pleaseWaitSorry}&nbsp;</span>`
						),
						r = o(
							`<span style="color: green;">${U.settings.finished}</span>`
						),
						l = o(
							`<span style="color: red;">${U.settings.downloadError}</span>`
						),
						c = o(
							'<div style="display: inline-block; font-weight: bold; width: 340px; text-align: center;"></div>'
						);
					c.append(s, e, " [", a, "]"), t.append(c);
					const d = await (async function (e, t) {
							const a = (() => {
									const e = ~~(
										(new Date(
											new Date().toLocaleString("en-US", {
												timeZone: z.timezone,
											})
										).getTime() -
											new Date().getTime()) /
										1e3
									);
									return 60 * Math.ceil(e / 60);
								})(),
								i = (e, t) =>
									new Date(
										e[0],
										e[1] - 1,
										e[2],
										t[0],
										t[1],
										t[2]
									).getTime() -
									1e3 * a,
								n = {};
							let s = e - 1;
							for (; !gt; ) {
								(s += 1), t.text(s);
								const e = o(await Q.ajax({ url: Oe(s) })),
									a = e.find("p.error").eq(0);
								if (0 === a.length) {
									if (
										0 ===
										e
											.find(".contentpane")
											.eq(1)
											.find("table.borderlist").length
									)
										break;
									n[s] = null;
								} else {
									const e = a.text(),
										t = e.match(/\d+:\d+:\d+/),
										r = e.match(/\d+\.\d+\.\d+/);
									if (t) {
										const e = (
												r
													? r[0]
													: Ae.serverDate().toLocaleDateString(
															"pl-PL",
															{
																timeZone:
																	z.timezone,
															}
													  )
											)
												.split(".")
												.reverse()
												.map((e) => W.toNumber(e)),
											a = t[0]
												.split(":")
												.map((e) => W.toNumber(e));
										n[s] = {
											attack: i(e, a),
											conquest: i(
												[
													e[0],
													e[1],
													e[2] +
														(await H.conquestProtection()),
												],
												a
											),
										};
									} else n[s] = null;
								}
								await Ae.wait(700);
							}
							return n;
						})(Number(n.val()), a),
						p = o(
							`<div style="display: inline-block; width: 150px;" class="kcs_button">${U.copyToClipboard}</div>`
						);
					let u = "",
						m = 0;
					Object.keys(d).forEach((e) => {
						if (((m += 1), d[e])) {
							const t = d[e].attack,
								a = d[e].conquest;
							(u += `id: ${e} -`),
								(u += ` ${
									U.settings.fromConquest
								} ${Ae.displayDate(new Date(a))};`),
								(u += ` ${
									U.settings.fromAttack
								} ${Ae.displayDate(new Date(t))}.`);
						} else u += `id: ${e} - ${U.settings.noProtection}.`;
						u += "\n";
					}),
						e.remove(),
						m < 1
							? s.replaceWith(l)
							: (s.replaceWith(r),
							  t.append(p),
							  p.on("click", () => {
									W.copyToClipboard(
										`${U.settings.allInServerTime}\n${u}`
									),
										r.replaceWith(
											`<span style="color: green;">${U.settings.onClipboard}</span>`
										);
							  }));
				});
		}
		const bt = [
				E.raw.attack,
				E.raw.support,
				E.raw.stone,
				E.raw.wood,
				E.raw.iron,
				...Object.values(E.raw.buildings),
				...Object.values(E.raw.units),
			],
			kt = (e, t) => {
				e.empty();
				const a = o(
					`<span style="color: green;">${t} ${U.settings.refresh}</span>`
				);
				e.append(a), a.fadeOut(5e3);
			};
		var ft = new (class {
				constructor() {
					(this.defaultCatapultTarget = null),
						(this.multiSendOptions = null),
						(this.marketQuickAmounts = null),
						(this.quickSendUnits = null),
						(this.barracksTemplates = null),
						(this.marketSendBack = null),
						(this.buildingsOverviewWarn = null),
						(this.barracksQuickCoords = null),
						(this.defaultCatapultTargetPreset = O.type.wall.name),
						(this.multiSendOptionsPreset = {
							0: 2,
							1: 3,
							2: 4,
							3: 5,
							4: 15,
							5: 30,
						}),
						(this.marketQuickAmountsPreset = {
							0: {
								description: "1k",
								img: E.raw.buildings.storage,
								resources: { 0: 1e3, 1: 1e3, 2: 1e3 },
							},
							1: {
								description: "10k",
								img: E.raw.buildings.storage,
								resources: { 0: 1e4, 1: 1e4, 2: 1e4 },
							},
							2: {
								description: "50k",
								img: E.raw.buildings.storage,
								resources: { 0: 5e4, 1: 5e4, 2: 5e4 },
							},
							3: {
								description: "100k",
								img: E.raw.buildings.storage,
								resources: { 0: 1e5, 1: 1e5, 2: 1e5 },
							},
							4: {
								description: "200k",
								img: E.raw.buildings.storage,
								resources: { 0: 2e5, 1: 2e5, 2: 2e5 },
							},
							5: {
								description: "500",
								img: E.raw.units.axe,
								resources: { 0: 2e4, 1: 25e3, 2: 25e3 },
							},
							6: {
								description: "1k",
								img: E.raw.units.axe,
								resources: { 0: 4e4, 1: 5e4, 2: 5e4 },
							},
							7: {
								description: "100",
								img: E.raw.units.light,
								resources: { 0: 1e4, 1: 1e4, 2: 3e4 },
							},
							8: {
								description: "200",
								img: E.raw.units.light,
								resources: { 0: 2e4, 1: 2e4, 2: 6e4 },
							},
							9: {
								description: "200",
								img: E.raw.units.bow,
								resources: { 0: 16e3, 1: 32e3, 2: 16e3 },
							},
							10: {
								description: "500",
								img: E.raw.units.bow,
								resources: { 0: 4e4, 1: 8e4, 2: 4e4 },
							},
							11: {
								description: "50",
								img: E.raw.units.heavy,
								resources: { 0: 5e3, 1: 15e3, 2: 25e3 },
							},
							12: {
								description: "100",
								img: E.raw.units.heavy,
								resources: { 0: 1e4, 1: 3e4, 2: 5e4 },
							},
							13: {
								description: "1",
								img: E.raw.units.snob,
								resources: { 0: 1e5, 1: 12e4, 2: 8e4 },
							},
						}),
						(this.quickSendUnitsPreset = {
							0: {
								raxMulti: !0,
								action: re.action.attack.name,
								units: { [re.type.farmer.name]: 3 },
							},
							1: {
								raxMulti: !0,
								action: re.action.attack.name,
								units: { [re.type.axe.name]: 3 },
							},
							2: {
								raxMulti: !1,
								action: re.action.attack.name,
								units: { [re.type.light.name]: 200 },
							},
							3: {
								raxMulti: !1,
								action: re.action.attack.name,
								units: { [re.type.spy.name]: 5 },
							},
							4: {
								raxMulti: !1,
								action: re.action.espy.name,
								units: { [re.type.spy.name]: 200 },
							},
							5: {
								raxMulti: !0,
								action: re.action.attack.name,
								units: {
									[re.type.axe.name]: 3,
									[re.type.ram.name]: 1,
								},
							},
							6: {
								raxMulti: !1,
								action: re.action.support.name,
								units: { [re.type.heavy.name]: 50 },
							},
						}),
						(this.barracksTemplatesPreset = {
							0: {
								description: "Milicianos",
								units: { [re.type.farmer.name]: 90 },
							},
							1: {
								description: "Fake de milicianos",
								units: {
									[re.type.farmer.name]: 89,
									[re.type.ram.name]: 1,
								},
							},
							2: {
								description: "Fake de hachas",
								units: {
									[re.type.axe.name]: 89,
									[re.type.ram.name]: 1,
								},
							},
							3: {
								description: "Off",
								units: {
									[re.type.axe.name]: 43e3,
									[re.type.spy.name]: 200,
									[re.type.ram.name]: 600,
								},
							},
						}),
						(this.buildingsOverviewWarnPreset = {
							[O.type.main.name]: 30,
							[O.type.stone.name]: 50,
							[O.type.wood.name]: 50,
							[O.type.iron.name]: 50,
							[O.type.storage.name]: 46,
							[O.type.hide.name]: 10,
							[O.type.farm.name]: 50,
							[O.type.barracks.name]: 30,
							[O.type.wall.name]: 20,
							[O.type.stable.name]: 15,
							[O.type.market.name]: 30,
							[O.type.garage.name]: 5,
							[O.type.snob.name]: 1,
							[O.type.smith.name]: 1,
							[O.type.statue.name]: 0,
						}),
						(this.marketSendBackPreset = {
							0: 5e4,
							1: 1e5,
							3: 2e5,
							4: 3e5,
						});
				}
				init() {
					(this.defaultCatapultTarget = ht(
						F.keys.defaultCatapultTarget,
						this.defaultCatapultTargetPreset
					)),
						(this.multiSendOptions = ht(
							F.keys.multiSendOptions,
							this.multiSendOptionsPreset
						)),
						(this.marketQuickAmounts = ht(
							F.keys.marketQuickAmounts,
							this.marketQuickAmountsPreset
						)),
						(this.quickSendUnits = ht(
							F.keys.quickSendUnits,
							this.quickSendUnitsPreset
						)),
						(this.barracksTemplates = ht(
							F.keys.barracksTemplates,
							this.barracksTemplatesPreset
						)),
						(this.marketSendBack = ht(
							F.keys.marketSendBack,
							this.marketSendBackPreset
						)),
						(this.buildingsOverviewWarn = ht(
							F.keys.buildingsOverviewWarn,
							this.buildingsOverviewWarnPreset
						)),
						(this.barracksQuickCoords = F.getItem(
							F.keys.barracksQuickCoords
						)),
						ht(F.keys.wheelOptions, {
							dices: 40,
							local: !0,
							set: !0,
						}),
						ht(F.keys.mapSettings, {
							relocation: !1,
							treaties: !0,
							snobs: !0,
							largestUnit: !0,
							set: !0,
						});
				}
				displayMultiSendSetting(e) {
					e.append(
						`<div class="kcs_settings_header">${U.settings.multiSendSetting}</div>`
					);
					const t = o("<form></form>");
					return (
						Object.values(this.multiSendOptions).forEach((e, a) => {
							o(
								`<div style="display: inline-block; text-align: center;">#${a}<br></div>`
							)
								.append(
									`<input type="number" name="${a}" value="${e}" style="width: 32px; margin: 1px;">`
								)
								.appendTo(t);
						}),
						e.append(t, "<br><hr>"),
						() => {
							t.find("input").each((e, t) => {
								this.multiSendOptions[e] = W.toNumber(
									o(t).val()
								);
							}),
								F.setItem(
									F.keys.multiSendOptions,
									this.multiSendOptions
								);
						}
					);
				}
				displayBuildingWarnSetting(e) {
					e.append(
						`<div class="kcs_settings_header">${U.settings.buildingWarnSetting}</div>`
					);
					const t = o("<form></form>");
					return (
						Object.keys(this.buildingsOverviewWarn).forEach((e) => {
							o(
								'<div style="display: inline-block; margin-left: 8px;"></div>'
							)
								.append(
									`<img style="vertical-align: sub; width:16px; height:16px;" src="${O.type[e].image}">`
								)
								.append(
									`<input type="number" name="${e}" min="0" max="${O.type[e].levels}"\n        value="${this.buildingsOverviewWarn[e]}" style="width: 32px; margin: 1px;">`
								)
								.appendTo(t);
						}),
						e.append(t, "<br><hr>"),
						() => {
							t.find("input").each((e, t) => {
								const a = o(t);
								this.buildingsOverviewWarn[a.attr("name")] =
									W.toNumber(a.val());
							}),
								F.setItem(
									F.keys.buildingsOverviewWarn,
									this.buildingsOverviewWarn
								);
						}
					);
				}
				displayDefaultAttackTargetSetting(e) {
					e.append(
						`<div class="kcs_settings_header">${U.settings.defaultAttackTargetSetting}</div>`
					);
					const t = o("<select></select>");
					return (
						Object.values(O.type).forEach((e) => {
							t.append(
								`<option value="${e.name}" ${
									e.name === this.defaultCatapultTarget
										? "selected"
										: ""
								}>\n      ${U.buildings[e.name]}</option>`
							);
						}),
						e.append(t, "<br><br><hr>"),
						() => {
							F.setItem(F.keys.defaultCatapultTarget, t.val());
						}
					);
				}
				displayMarketQuickAmountsSetting(e) {
					const t = o("<form></form>");
					e.append(
						`<div class="kcs_settings_header">${U.settings.marketQuickAmountsSetting}</div>`
					);
					const a = o("<div></div>"),
						i = o('<div style="height: 20px;"></div>')
							.append(
								o(
									'<div style="width: 115px; display: inline-block; margin: 1px; text-align: center;"></div>'
								).append(E.$forum())
							)
							.append(
								o(
									'<div style="width: 180px; display: inline-block; margin: 1px; text-align: center;"></div>'
								).append(E.$help())
							)
							.append(
								o(
									'<div style="width: 64px; display: inline-block; margin: 1px; text-align: center;"></div>'
								).append(E.$stone())
							)
							.append(
								o(
									'<div style="width: 64px; display: inline-block; margin: 1px; text-align: center;"></div>'
								).append(E.$wood())
							)
							.append(
								o(
									'<div style="width: 64px; display: inline-block; margin: 1px; text-align: center;"></div>'
								).append(E.$iron())
							);
					a.append(i);
					return (
						Object.values(this.marketQuickAmounts).forEach((e) => {
							const a = o('<div style="display: block;"></div>')
								.append(
									`<input type="text" value="${e.description}" style="width: 115px; margin: 1px;">`
								)
								.append(
									((e) => {
										let t =
											'<select style="width: 180px; margin: 1px; font-size: 10px; height: 19px; vertical-align: top;">';
										for (const a of bt)
											t += `<option value="${a}"${
												a === e ? " selected" : ""
											}>${a}</option>`;
										return (t += "</select>"), t;
									})(e.img)
								);
							["stone", "wood", "iron"].forEach((t, i) => {
								a.append(
									`<input type="number" min="0" max="600000" name="${t}" value="${e.resources[i]}" style="width: 64px; margin: 1px;">`
								);
							}),
								t.append(a);
						}),
						a.append(t),
						e.append(a, "<br><hr>"),
						() => {
							t.find("div").each((e, t) => {
								const a = o(t).children();
								this.marketQuickAmounts[e] = {
									description: a.eq(0).val(),
									img: a.eq(1).val(),
									resources: {
										0: W.toNumber(a.eq(2).val()),
										1: W.toNumber(a.eq(3).val()),
										2: W.toNumber(a.eq(4).val()),
									},
								};
							}),
								F.setItem(
									F.keys.marketQuickAmounts,
									this.marketQuickAmounts
								);
						}
					);
				}
				displayQuickSendUnitsSetting(e) {
					e.append(
						`<div class="kcs_settings_header">${U.settings.quickSendUnitsSetting}</div>`
					);
					const t = [
							re.type.farmer,
							re.type.sword,
							re.type.spear,
							re.type.axe,
							re.type.bow,
							re.type.spy,
							re.type.light,
							re.type.heavy,
							re.type.ram,
							re.type.kata,
						],
						a = o('<div style="height: 42px;"></div>');
					a.append(
						o(
							'<div style="width: 60px; display: inline-block; margin: 1px; text-align: center;"></div>'
						).append(E.$attack())
					),
						t.forEach((e, t) => {
							a.append(
								o(
									`<div style="width: 53px; display: inline-block; margin: 1px; text-align: center;"><img src="${e.image}"></div>`
								)
							),
								7 === t &&
									a.append(
										o(
											`<div style="width: 51px; display: inline-block; margin: 1px; text-align: center; font-size: 9px; line-height: 10px;">\n          ${U.settings.raxMulti}\n          </div>`
										)
									);
						}),
						e.append(a);
					const i = [
							re.action.attack,
							re.action.support,
							re.action.espy,
						],
						n = o("<form></form>");
					return (
						Object.values(this.quickSendUnits).forEach((e) => {
							const a = o('<div style="display: block;"></div>');
							a.append(
								((e) => {
									let t =
										'<select style="width: 60px; height: 18px; margin: 1px; font-size: 9px; vertical-align: top;">';
									for (const a of i)
										t += `<option value="${a.name}"${
											a.name === e ? " selected" : ""
										}>${a.text}</option>`;
									return (t += "</select>"), t;
								})(e.action)
							),
								t.forEach((t, i) => {
									a.append(
										`<input type="number" min="0" max="50000" name="${
											t.name
										}" value="${
											e.units[t.name] || ""
										}"\n        style="width: 51px; margin: 1px;">`
									),
										7 === i &&
											a.append(
												`<input style="text-align: center; width: 51px; margin: 1px;" type="checkbox"${
													e.raxMulti ? " checked" : ""
												}>`
											);
								}),
								n.append(a);
						}),
						e.append(n, "<br><hr>"),
						() => {
							n.find("div").each((e, a) => {
								const i = o(a).children(),
									n = {};
								t.forEach((e, t) => {
									let a;
									(a =
										t > 7
											? i.eq(2 + t).val()
											: i.eq(1 + t).val()),
										a > 0 && (n[e.name] = W.toNumber(a));
								}),
									(this.quickSendUnits[e] = {
										raxMulti: i.eq(9).prop("checked"),
										action: i.eq(0).val(),
										units: n,
									});
							}),
								F.setItem(
									F.keys.quickSendUnits,
									this.quickSendUnits
								);
						}
					);
				}
				displayBarracksTemplatesSetting(e) {
					e.append(
						`<div class="kcs_settings_header">${U.settings.barrackTemplates}</div>`
					);
					const t = [
							re.type.farmer,
							re.type.sword,
							re.type.spear,
							re.type.axe,
							re.type.bow,
							re.type.spy,
							re.type.light,
							re.type.heavy,
							re.type.ram,
							re.type.kata,
						],
						a = o('<div style="height: 22px;"></div>');
					a.append(
						o(
							'<div style="width: 115px; display: inline-block; margin: 1px; text-align: center;"></div>'
						).append(E.$forum())
					),
						t.forEach((e) => {
							a.append(
								o(
									`<div style="width: 53px; display: inline-block; margin: 1px; text-align: center;"><img src="${e.image}"></div>`
								)
							);
						}),
						e.append(a);
					const i = o("<form></form>");
					return (
						Object.values(this.barracksTemplates).forEach((e) => {
							const a = o('<div style="display: block;"></div>');
							a.append(
								`<input type="text" value="${e.description}" style="width: 115px; margin: 1px;">`
							),
								t.forEach((t) => {
									a.append(
										`<input type="number" min="0" max="50000" name="${
											t.name
										}" value="${
											e.units[t.name] || ""
										}"\n        style="width: 51px; margin: 1px;">`
									);
								}),
								i.append(a);
						}),
						e.append(i, "<br><hr>"),
						() => {
							i.find("div").each((e, a) => {
								const i = o(a).children(),
									n = {};
								t.forEach((e, t) => {
									const a = i.eq(1 + t).val();
									a > 0 && (n[e.name] = W.toNumber(a));
								}),
									(this.barracksTemplates[e] = {
										description: i.eq(0).val(),
										units: n,
									});
							}),
								F.setItem(
									F.keys.barracksTemplates,
									this.barracksTemplates
								);
						}
					);
				}
				displayBarracksQuickCoords(e) {
					e.append(
						`<div class="kcs_settings_header">${U.settings.barrackQuickCoords}</div>`
					);
					const t = () => {
							const e = this.barracksQuickCoords || "";
							let t = "",
								a = 0;
							for (const i of Object.keys(e)) {
								a > 0 && (t += ", "), (a += 1);
								const n = e[i];
								t += `${i}${n ? `(${n})` : ""}`;
							}
							return t;
						},
						a = o(
							`<textarea wrap="on" style="width: 665px; resize: vertical;" placeholder="${U.settings.quickCoordsPlaceholder}"></textarea>`
						);
					return (
						a.val(t()),
						e.append(a, "<br><hr>"),
						() => {
							const e = a
									.val()
									.match(/\d{3}\|\d{3}(\s*\(.*?\))?/g),
								i = {};
							if (e) {
								for (const t of e) {
									const e = t.match(/\d{3}\|\d{3}/),
										a = t.match(/\((.*)\)/);
									i[e] = a ? a[1] : "";
								}
								(this.barracksQuickCoords = i),
									F.setItem(F.keys.barracksQuickCoords, i),
									a.val(t());
							} else
								a.val(""),
									F.setItem(F.keys.barracksQuickCoords, i);
						}
					);
				}
				displaySettingsTab(e, t, a, i) {
					const n = [];
					yt(e),
						n.push(this.displayMultiSendSetting(e)),
						n.push(this.displayDefaultAttackTargetSetting(e)),
						n.push(this.displayBuildingWarnSetting(e)),
						n.push(this.displayMarketQuickAmountsSetting(e)),
						n.push(this.displayQuickSendUnitsSetting(e)),
						n.push(this.displayBarracksQuickCoords(e)),
						n.push(this.displayBarracksTemplatesSetting(e)),
						t.click(() => {
							n.forEach((e) => e()), kt(i, U.settings.saveOk);
						}),
						a.click(() => {
							t.off(),
								a.off(),
								(this.defaultCatapultTarget = mt(
									F.keys.defaultCatapultTarget,
									this.defaultCatapultTargetPreset
								)),
								(this.multiSendOptions = mt(
									F.keys.multiSendOptions,
									this.multiSendOptionsPreset
								)),
								(this.marketQuickAmounts = mt(
									F.keys.marketQuickAmounts,
									this.marketQuickAmountsPreset
								)),
								(this.quickSendUnits = mt(
									F.keys.quickSendUnits,
									this.quickSendUnitsPreset
								)),
								(this.barracksTemplates = mt(
									F.keys.barracksTemplates,
									this.barracksTemplatesPreset
								)),
								(this.marketSendBack = mt(
									F.keys.marketSendBack,
									this.marketSendBackPreset
								)),
								(this.buildingsOverviewWarn = mt(
									F.keys.buildingsOverviewWarn,
									this.buildingsOverviewWarnPreset
								)),
								e.empty(),
								this.displaySettingsTab(e, t, a, i),
								kt(i, U.settings.resetOk);
						});
				}
				display() {
					gt = !1;
					const e = o('<div class="kcs_settings_box"></div>'),
						t = o('<div class="kcs_settings_tab"></div>'),
						a = o(
							`<div style="float: left; width: 200px;" class="kcs_button">${U.settings.reset}</div>`
						),
						i = o(
							'<div style="display: inline; vertical-align: sub; font-weight: bold;"></div>'
						),
						n = o(
							`<div style="float: right; width: 200px;" class="kcs_button">${U.settings.save}</div>`
						),
						s = o(
							'<div class="click" style="float: right; margin-right: 5px; font-weight: bold">X</div>'
						);
					h.find("body").append(e),
						ce.backlight.on(() => {
							(gt = !0), e.remove();
						}),
						e
							.append(
								o('<div style="text-align: center;"></div>')
									.append(
										`<div class="kcs_headline" style="display: inline-block">${U.settings.title}</div>`
									)
									.append(s)
									.append(
										'<div class="kcs_small_text" style="margin-left: -16px;">by <span class="kcs_neon" style="font-size: 20px">gracul<span></div>'
									)
									.append(
										`<div class="kcs_small_text" style="float: right;">${U.settings.version}</div>`
									)
							)
							.append(t)
							.append(
								o(
									'<div style="margin-top: 5px; text-align: center;"></div>'
								).append(a, i, n)
							),
						this.displaySettingsTab(t, n, a, i),
						s.click(() => {
							(gt = !0), ce.backlight.off(), e.remove();
						});
				}
			})(),
			wt = {
				settlementBuildUp: "settlementBuildUp",
				castle: "castle",
				recruit: "recruit",
				barracks: "barracks",
				premiumWheelOfFortune: "premiumWheelOfFortune",
				premiumInventory: "premiumInventory",
				stoneAttack: "stoneAttack",
				lastVisited: "lastVisited",
				createAlly: "createAlly",
				wheelSpin: "wheelSpin",
				newServerStart: "newServerStart",
				recruitFarmers: "recruitFarmers",
			};
		function At() {
			const e = F.getItem(F.keys.timestampCheckpoints) || { 0: 0, 1: 0 };
			return [e[0], e[1]];
		}
		var vt = {
			getTimestampCheckpoints: At,
			setTimestampCheckpoint: function (e) {
				const t = At();
				F.setItem(F.keys.timestampCheckpoints, { 0: e, 1: t[0] });
			},
			setTimestampCheckpointWhenNoAttacks: function (e) {
				if (!(h.find("td.lay_tower_right_top_attack").length > 0)) {
					const t = At();
					F.setItem(F.keys.timestampCheckpoints, { 0: e, 1: t[0] });
				}
			},
		};
		var xt = {
			lobby: {
				settlementBuildUp: 66,
				stoneAttack: 65,
				wheelSpin: 75,
				playCastle: 90,
				playBarracks: 82,
			},
			game: {
				overviewArmy: 65,
				overviewSupport: 83,
				overviewProduction: 80,
				overviewBuildings: 66,
				overviewTransportReceive: 84,
				toolsAttackPlaner: 90,
				buildBarracksMassRecruit: 82,
				multiSmith: 77,
			},
			map: {
				copyCoords: 75,
				enterNote: 13,
				moveMapUp: 38,
				moveMapDown: 40,
				moveMapLeft: 37,
				moveMapRight: 39,
				group1: 81,
				group2: 87,
				group3: 69,
			},
		};
		let $t = !1;
		const St = 0,
			qt = 1,
			_t = 2,
			Ct = 3,
			Tt = 4,
			Bt = 5;
		function jt(e, t) {
			let a = e.find("tr").slice(1);
			a.eq(0).find("th").length > 0 && (a = a.slice(1));
			const i = [];
			return (
				a.each((e, a) => {
					const n = (function (e, t) {
						const a =
								1e3 *
								W.toNumber(e.eq(4).find("span").attr("time")),
							i = e.eq(1).find("a").eq(0),
							n = i.next().next(),
							s = e.eq(2).find("a").eq(0),
							r = e.eq(2).find("br").eq(0).next(),
							o = e.eq(2).text(),
							l = W.coordsToCoordList(
								o.substr(o.lastIndexOf("(") + 1, 7)
							),
							c = e.eq(1).text(),
							d = W.coordsToCoordList(
								c.substr(c.lastIndexOf("(") + 1, 7)
							),
							p = {
								description: e.eq(0).text(),
								ignored: !1,
								new: !0,
								time: {
									left: a,
									timestamp: a + t,
									spotted: t,
									travel: null,
								},
								defender: {
									name: i.text(),
									id: Number(
										W.queryString(i.attr("href")).get("id")
									),
								},
								target: {
									name: n.attr("title"),
									id: Number(
										W.queryString(n.attr("href")).get("id")
									),
									coords: d,
								},
								attacker: {
									name: s.text(),
									id: Number(
										W.queryString(s.attr("href")).get("id")
									),
								},
								source: {
									name: r.attr("title"),
									id: Number(
										W.queryString(r.attr("href")).get("id")
									),
									coords: l,
								},
								alliance: { name: null, id: null },
							},
							u = s.next();
						return (
							u.is("a") &&
								((p.alliance.name = u.text().slice(1, -1)),
								(p.alliance.id = W.queryString(
									u.attr("href")
								).get("id"))),
							p
						);
					})(o(a).find("td"), t);
					i.push(n);
				}),
				i
			);
		}
		const zt = {};
		function Mt(e) {
			const t = zt[e];
			return (
				t ||
				((zt[e] = `hsl(${Math.floor(255 * Math.random())},${Math.floor(
					180 * Math.random()
				)}%,${Math.floor(100 * Math.random())}%)`),
				zt[e])
			);
		}
		function Ut(e) {
			if (!$t) {
				const t = Ae.serverDate().getTime();
				for (const a of Object.keys(e)) t > a && delete e[a];
				F.setItem(F.keys.attacksHistory, e);
			}
		}
		const It = (e, t) => {
			const a = t[e.time.timestamp];
			if (!a) return null;
			for (let t = 0; t < a.len; t += 1) {
				const i = a[t];
				if (i[St] === e.target.id && i[qt] === e.source.id) {
					const e = [i[_t], i[Ct], i[Tt], i[Bt]];
					return (
						delete a[t],
						t < a.len - 1 &&
							((a[t] = a[a.len - 1]), delete a[a.len - 1]),
						(a.len -= 1),
						e
					);
				}
			}
			return null;
		};
		async function Kt(e, t) {
			const a = (e) =>
					1e3 * Number(e.find("#servertime").eq(0).attr("time")),
				i = (e) => e.find("table.borderlist").eq(2),
				n = (function (e) {
					return Math.ceil(
						Number(e.find("td.lay_tower_right_top_attack").text()) /
							50
					);
				})(e),
				s = [],
				r = await re.travelCalculator(),
				l = vt.getTimestampCheckpoints()[0],
				c = a(e);
			s.push(...jt(i(e), c));
			for (let e = 1; e < n; e += 1)
				try {
					const t = Q.ajax({ url: Ie(50 * e) });
					await Ae.wait(
						((d = n),
						d < 30 ? 10 : d < 100 ? 270 : d < 250 ? 710 : 960)
					);
					const r = o(await t);
					s.push(...jt(i(r), a(r)));
				} catch (e) {
					Q.log("Could not load next attack page :(");
				}
			var d;
			const p = {};
			for (const e of s) {
				const a = e,
					i = It(e, t);
				i
					? (([a.time.spotted, a.ignored, a.unitMax, a.unitMin] = i),
					  (a.new = !1))
					: ((a.time.spotted = e.time.spotted),
					  ([a.unitMax, a.unitMin] = r.possibleUnits(
							a.target.coords,
							a.source.coords,
							a.time.spotted - l + a.time.left,
							a.time.left
					  ))),
					a.unitMax === a.unitMin &&
						(a.time.travel = r.travelTime(
							a.target.coords,
							a.source.coords,
							a.unitMax
						));
				const { timestamp: n } = e.time;
				n in p ? p[n].push(a) : (p[n] = [a]);
			}
			return vt.setTimestampCheckpoint(c), [p, t, c];
		}
		function Wt(e, t) {
			const a = F.getComplexItem(F.keys.attacksOptions, t) || 0,
				i = o(
					'<div style="display: inline-block; padding: 0 5px 0 5px; margin: 2px 4px 2px 4px;"></div>'
				),
				n = o(
					`<input type="range" min="0" max="8" step="1" value="${
						9 - (a || 9)
					}" style="margin-top: 1px;">`
				);
			i.append(e, "<br>");
			const s = o(
				`<img src="${E.raw.noUnit}" style="vertical-align: bottom;">`
			);
			return (
				i.append(s),
				s.on("click", () => {
					n.val(0), n.trigger("input");
				}),
				[...re.bySpeed].reverse().forEach((e, t) => {
					const a = o(
						`<img src="${e.image}" style="vertical-align: bottom; cursor: pointer;" draggable="false">`
					);
					i.append(a),
						a.on("click", () => {
							n.val(t + 1), n.trigger("input");
						});
				}),
				n.on("input", () => {
					F.setComplexItem(
						F.keys.attacksOptions,
						t,
						9 - W.toNumber(n.val())
					);
				}),
				i.append("<br>", n),
				i
			);
		}
		class Rt {
			constructor(e) {
				(this.$page = e),
					(this.refreshInterval = null),
					(this.refreshTimeout =
						Number(
							F.getComplexItem(F.keys.attacksOptions, "refresh")
						) || 60),
					(this.$refreshRate = null),
					(this.timeoutObj = null),
					(this.$contentpane = this.$page
						.find("div.contentpane")
						.eq(1)),
					(this.$realAttacksTable = this.$page
						.find("table.borderlist")
						.eq(2)),
					(this.$attacksTableContainer = null),
					(this.attacksHistory = null),
					(this.currentAttacks = {}),
					(this.currentAlarms = []),
					(this.audioPlayer = (function () {
						let e = null,
							t = null,
							a = null,
							i = 0.5;
						return {
							play: () => e.play(),
							stop: () => e.pause(),
							test: () => {
								(!t || (t && t.paused)) &&
									((t = new Audio(a)),
									(t.volume = i),
									t.play());
							},
							volume: (a) => {
								(i = Number(a) / 100),
									e && (e.volume = i),
									t && (t.volume = i);
							},
							source: (t) => {
								let n = !1;
								e && ((n = !e.paused), e.pause()),
									(a = t),
									(e = new Audio(t)),
									(e.volume = i),
									(e.loop = !0),
									e.load(),
									n && e.play();
							},
						};
					})()),
					(this.$motherCheckbox = null);
			}
			hideRealAttacksTable() {
				this.$realAttacksTable.hide();
			}
			loadAttacksHistory() {
				return null === this.attacksHistory
					? F.getItem(F.keys.attacksHistory) || {}
					: this.attacksHistory;
			}
			async refillAttacksTable(e, t, a) {
				const i = F.getItem(F.keys.attacksOptions) || {},
					n = (i.ownAlarm || 10) - 1,
					s = (i.otherAlarm || 10) - 1,
					r = F.getItem(F.keys.mapGroups) || {},
					l = {};
				for (const e of Object.keys(r)) l[e] = Object.keys(r[e]);
				const c = F.getItem(F.keys.mapNotes) || {},
					d = o('<table id="kcs_attacks_table"></table>'),
					p = (function (e, t, a) {
						const i = Ae.serverDate().getTime();
						return (n) => {
							const s = i - n.spotted;
							return s < e
								? `rgba(255, 99, 0, ${(e - s / 1.8) / e})`
								: s < t
								? `rgba(255, 255, 0, ${
										(t - s / 2.5) / t - 0.3
								  })`
								: s < a
								? `rgba(0, 255, 0, ${(a - s / 2) / a - 0.5})`
								: "transparent";
						};
					})(9e5, 36e5, 108e5),
					u = [],
					m = [];
				this.currentAttacks = e;
				for (const a of Object.values(e))
					for (const e of a) {
						const { timestamp: a } = e.time;
						a in t || ((t[a] = {}), (t[a].len = 0));
						const i = t[a];
						i[i.len] = {
							[St]: e.target.id,
							[qt]: e.source.id,
							[_t]: e.time.spotted,
							[Ct]: e.ignored ? 1 : 0,
							[Tt]: e.unitMax,
							[Bt]: e.unitMin,
						};
						let r = "";
						e.ignored
							? (r = ' style="background-color: antiquewhite;"')
							: Te === e.defender.id && e.unitMax >= n
							? (u.push({ tm: a, pos: i.len }),
							  (r = ' style="background-color: lightsalmon;"'))
							: Te !== e.defender.id &&
							  e.unitMax >= s &&
							  (u.push({ tm: a, pos: i.len }),
							  (r = ' style="background-color: lightsalmon;"')),
							e.new && m.push(e);
						const h = l[e.target.id],
							g = l[e.source.id],
							y = c[e.target.id],
							b = c[e.source.id];
						let k = "";
						h &&
							h.forEach((e) => {
								k += `<div class="kcs_attacks_group_${e}"></div>`;
							}),
							y && (k += y);
						let f = "";
						g &&
							g.forEach((e) => {
								f += `<div class="kcs_attacks_group_${e}"></div>`;
							}),
							b && (f += b);
						let w =
							"" +
							`(<a href="${Be(
								...e.target.coords
							)}" style="color: ${Mt(
								e.target.id
							)};">${e.target.coords.join("|")}</a>) ` +
							`<a href="${Fe(e.defender.id)}">${
								e.defender.name
							}</a>`;
						k && (w += ` &lt;${k}&gt;`);
						let A =
							"" +
							`(<a href="${Be(
								...e.source.coords
							)}" style="color: ${Mt(
								e.source.id
							)};">${e.source.coords.join("|")}</a>) ` +
							`<a href="${Fe(e.attacker.id)}">${
								e.attacker.name
							}</a>`;
						e.alliance.name &&
							(A += `[<a href="${Ee(e.alliance.id)}">${
								e.alliance.name
							}</a>]`),
							f && (A += ` &lt;${f}&gt;`);
						let v = `<img src="${
							re.travelCalculatorUnitImagesByIndex[e.unitMax]
						}" class="kcs_attacks_unit"></img>`;
						e.unitMin !== e.unitMax &&
							(v += `-<img src="${
								re.travelCalculatorUnitImagesByIndex[e.unitMin]
							}" class="kcs_attacks_unit"></img>`);
						const x = `<td class="kcs_cell_checkbox"><input type="checkbox" tm="${a}" pos="${i.len}"></td>`,
							$ = `<td class="kcs_cell_description">${v}${e.description}</td>`,
							S = `<td class="kcs_cell_target">${w}</td>`,
							q = `<td class="kcs_cell_source">${A}</td>`,
							_ = `<td class="kcs_cell_timestamp">${Ae.displayDate(
								new Date(e.time.timestamp)
							)}</td>`,
							C = `<td class="kcs_cell_timeleft" style="background-color: ${p(
								e.time
							)}">${Ae.timeDown(e.time.timestamp)}</td>`,
							T = o(`<tr ${r}>${x}${$}${S}${q}${_}${C}</tr>`);
						d.append(T), T.on("hover", () => {}), (i.len += 1);
					}
				if (
					(this.$attacksTableContainer.empty(),
					this.$attacksTableContainer.append(d),
					this.$motherCheckbox.prop("checked") &&
						this.$motherCheckbox.prop("checked", !1),
					Ut(
						(function (e, t) {
							const a = Object.keys(e);
							for (
								let i = 0;
								i < a.length && Number(a[i]) < t;
								i += 1
							)
								delete e[i];
							return e;
						})(t, a)
					),
					(this.attacksHistory = t),
					(this.currentAlarms = u),
					u.length && this.audioPlayer.play(),
					m.length)
				) {
					const e = {};
					for (const [t, a] of Object.entries(m)) {
						const i = {};
						a.unitMax === a.unitMin
							? (i.return = Ae.displayDate(
									new Date(a.time.timestamp + a.time.travel)
							  ))
							: (i.return = null);
						const n = l[a.target.id],
							s = l[a.source.id],
							r = [];
						n &&
							n.forEach((e) => {
								"0" === e && r.push("offowa"),
									"1" === e && r.push("defowa"),
									"2" === e && r.push("sojuszowy def");
							});
						const o = [];
						s &&
							s.forEach((e) => {
								"0" === e && o.push("offowa"),
									"1" === e && o.push("defowa"),
									"2" === e && o.push("sojuszowy def");
							}),
							(i.unitMax = a.unitMax),
							(i.unitMin = a.unitMin),
							(i.time = Ae.displayDate(
								new Date(a.time.timestamp)
							)),
							(i.timeleft =
								Ae.convertDurationInSecondsIntoHMSString(
									Ae.convertToKATimestamp(a.time.left)
								)),
							(i.timestamp = a.time.timestamp),
							(i.attacker = a.attacker.name),
							(i.defender = a.defender.name),
							(i.source = a.source.coords),
							(i.sourceInfo = o.join(", ")),
							(i.target = a.target.coords),
							(i.targetInfo = r.join(", ")),
							a.alliance.name && (i.alliance = a.alliance.name),
							(e[t] = i);
					}
					const t = JSON.stringify(e),
						a = new XMLHttpRequest();
					a.open("POST", "http://127.0.0.1/"),
						a.setRequestHeader("Content-Type", "text/plain"),
						a.send(t);
				}
			}
			disableAlarms(e) {
				for (const t of e)
					for (let e = this.currentAlarms.length - 1; e >= 0; e -= 1)
						t.tm === this.currentAlarms[e].tm &&
							t.pos === this.currentAlarms[e].pos &&
							this.currentAlarms.splice(e, 1);
				0 === this.currentAlarms.length && this.audioPlayer.stop();
			}
			putOwnTables() {
				const e = o(
						'<table class="borderlist" style="width: 820px; table-layout: fixed; border-bottom: 3px solid #CFAB65;"></table>'
					),
					t = o('<span class="click kcs_small_text">(prueba)</span>');
				o("<tr></tr>")
					.append('<th style="text-align: center;">Filtros</th>')
					.append(
						o(
							'<th style="width: 390px; text-align: center;" colspan="2">Alarma</th>'
						).append(" ", t)
					)
					.appendTo(e),
					t.click(() => {
						this.audioPlayer.test();
					});
				const a = o('<div style="margin: 2px 0 2px 0;"></div>'),
					i = F.getComplexItem(F.keys.attacksOptions, "volume") || 50,
					n = o(
						`<input type="range" min="0" max="100" step="1" value="${i}" style="width: 60px; vertical-align: top; margin-left: 5px;">`
					);
				this.audioPlayer.volume(i),
					n.on("input", () => {
						const e = W.toNumber(Math.max(20, n.val()));
						n.val(e),
							this.audioPlayer.volume(e),
							F.setComplexItem(
								F.keys.attacksOptions,
								"volume",
								e
							);
					}),
					a.append(`${U.volume} `, n, "<br>");
				const s = o("<div></div>"),
					r =
						F.getComplexItem(F.keys.attacksOptions, "audio") ||
						"crickets";
				for (const e of Object.keys(j.audio)) {
					const t = r === e,
						a = o(
							`<input type="radio" name="audiosrc" id="kcs_${e}"${
								t ? "checked" : ""
							}>`
						);
					s.append(a),
						s.append(`<label for="kcs_${e}">${U.audio[e]}</label>`),
						a.on("change", () => {
							this.audioPlayer.source(j.audio[e]),
								F.setComplexItem(
									F.keys.attacksOptions,
									"audio",
									e
								);
						}),
						t && this.audioPlayer.source(j.audio[e]);
				}
				o("<tr></tr>")
					.append(
						'<td rowspan="2" style="text-align: center;">Aquí se adjuntará,<br>por unidad,<br>por coordenadas,<br>por nombre del jugador</td>'
					)
					.append(
						o(
							'<td style="text-align: center; line-height: 20px;" colspan="2"></td>'
						).append(a, s)
					)
					.appendTo(e),
					o("<tr></tr>")
						.append(
							o('<td style="text-align: center;"></td>').append(
								Wt(U.ownAlarm, "ownAlarm")
							)
						)
						.append(
							o('<td style="text-align: center;"></td>').append(
								Wt(U.otherAlarm, "otherAlarm")
							)
						)
						.appendTo(e);
				const l = o(
						'<div style="width: 30%; display: inline-block; text-align: center;"></div>'
					),
					c = o(
						`<div class="kcs_button" style="width: 150px; margin: 0 auto;">${U.ignore}</div>`
					);
				c.click(() => {
					const e = [];
					this.$attacksTableContainer.find("input").each((t, a) => {
						if (a.checked) {
							const t = Number(a.getAttribute("tm")),
								i = Number(a.getAttribute("pos"));
							(this.currentAttacks[t][i].ignored = !0),
								(this.attacksHistory[t][i][Ct] = 1),
								e.push({ tm: t, pos: i }),
								(a.parentElement.parentElement.style.backgroundColor =
									"antiquewhite");
						}
					}),
						Ut(this.attacksHistory),
						this.disableAlarms(e);
				}),
					l.append(c);
				const d = o(
						'<div style="width: 30%; display: inline-block; text-align: center;"></div>'
					),
					p = o(
						`<div class="kcs_button" style="width: 150px; margin: 0 auto;">${U.bbCodes}</div>`
					);
				p.click(() => {
					const e = [];
					this.$attacksTableContainer.find("input").each((t, a) => {
						if (a.checked) {
							const t = Number(a.getAttribute("tm")),
								i = Number(a.getAttribute("pos"));
							e.push(
								(function (e) {
									let t = "";
									return (
										e.unitMax === e.unitMin
											? ((t +=
													re
														.travelCalculatorUnitBBCodesByIndex[
														e.unitMax
													]),
											  (t += " "),
											  (t +=
													re
														.travelCalculatorUnitNamesByIndex[
														e.unitMax
													]))
											: ((t += `${
													re
														.travelCalculatorUnitBBCodesByIndex[
														e.unitMax
													]
											  } - ${
													re
														.travelCalculatorUnitBBCodesByIndex[
														e.unitMin
													]
											  }`),
											  (t += " "),
											  (t += `${
													re
														.travelCalculatorUnitNamesByIndex[
														e.unitMax
													]
											  } - ${
													re
														.travelCalculatorUnitNamesByIndex[
														e.unitMin
													]
											  }`)),
										(t += " "),
										(t += e.description),
										(t += " Dentro de "),
										(t +=
											Ae.convertDurationInSecondsIntoHMSString(
												Ae.convertToKATimestamp(
													e.time.left
												)
											)),
										(t += " "),
										(t += `[Llegada ${Ae.displayDate(
											new Date(e.time.timestamp)
										)}]`),
										(t += "<br>"),
										(t += "Jugador atacado: "),
										(t += `[player]${e.defender.name}[/player]`),
										(t += " en "),
										(t += `[village]${e.target.coords.join(
											"|"
										)}[/village]`),
										(t += "<br>"),
										(t += "Atacante: "),
										(t += `[player]${e.attacker.name}[/player]`),
										e.alliance.name &&
											(t += `[[ally]${e.alliance.name}[/ally]]`),
										(t += " con "),
										(t += `[village]${e.source.coords.join(
											"|"
										)}[/village]`),
										e.unitMax === e.unitMin &&
											((t += "<br>"),
											(t += ` (Regreso del ejército atacante: ${Ae.displayDate(
												new Date(
													e.time.timestamp +
														e.time.travel
												)
											)})`)),
										t
									);
								})(this.currentAttacks[t][i])
							);
						}
					}),
						e.length && ce.textCopyBox(e.join("<br><br>"));
				}),
					d.append(p);
				const u = o(
						'<div style="width: 39%; display: inline-block; text-align: center;" class="kcs_small_text2"></div>'
					),
					m = this.refreshTimeout,
					h = o(
						`<input type="number" min="30" max="300" class="kcs_building_level" style="width: 40px;" value="${m}">`
					);
				u.append(`${U.refreshRate} `, h),
					h.on("focusout", () => {
						const e = Math.min(
							Math.max(Number(h.val()) || 60, 30),
							300
						);
						h.val(e),
							F.setComplexItem(
								F.keys.attacksOptions,
								"refresh",
								e
							),
							(this.refreshTimeout = e);
					}),
					(this.$refreshRate = o(
						'<div style="float: right; line-height: 21px; text-align: right; width: 55px;"></div>'
					)),
					u.append(this.$refreshRate);
				const g = o(
					'<table class="borderlist" style="width: 820px; position: sticky; top: 0;"></table>'
				);
				o("<tr></tr>")
					.append(
						'<td colspan="5" style="padding: 3px 0 3px 0;"> Aquí encontrarás datos sobre los ataques en BB-Codes </td>'
					)
					.appendTo(g),
					o("<tr></tr>")
						.append(
							o(
								'<td colspan="5" style="padding: 3px 0 3px 0;"></td>'
							).append(l, d, u)
						)
						.appendTo(g),
					(this.$motherCheckbox = o('<input type="checkbox">')),
					this.$motherCheckbox.click(() => {
						const e = this.$motherCheckbox.prop("checked");
						this.$attacksTableContainer
							.find("input")
							.each((t, a) => {
								a.checked = e;
							});
					}),
					o("<tr></tr>")
						.append(
							o(
								'<th style="background-size: cover; width: 22px; padding: 0; text-align: center;"></th>'
							).append(this.$motherCheckbox)
						)
						.append(
							o(
								`<th style="background-size: cover; width: 110px; padding: 1px;">${U.description}</th>`
							).append(
								"<br>",
								`<span class="kcs_attacks_small_text">${U.descriptionInfo}</span>`
							)
						)
						.append(
							o(
								`<th style="background-size: cover; width: 226px; padding: 1px;">${U.destination}</th>`
							).append(
								"<br>",
								`<span class="kcs_attacks_small_text">${U.sourceAndTargetInfo}</span>`
							)
						)
						.append(
							o(
								`<th style="background-size: cover; width: 258px; padding: 1px;">${U.origin}</th>`
							).append(
								"<br>",
								`<span class="kcs_attacks_small_text">${U.sourceAndTargetInfo}</span>`
							)
						)
						.append(
							o(
								`<th style="background-size: cover; padding: 1px;">${U.arrival}</th>`
							)
								.append(
									`<br><span class="kcs_attacks_small_text">${U.howLongAgoSpotted}</span><br>`
								)
								.append(
									'<span class="kcs_attacks_small_text"><div class="kcs_arrival_info" style="background-color: rgb(255, 99, 0);"></div> < 15 min</span>, '
								)
								.append(
									'<span class="kcs_attacks_small_text"><div class="kcs_arrival_info" style="background-color: rgb(255, 255, 0, 0.8);"></div> < 1h</span>, '
								)
								.append(
									'<span class="kcs_attacks_small_text"><div class="kcs_arrival_info" style="background-color: rgb(0, 255, 0, 0.5);"></div> < 3h</span>'
								)
						)
						.appendTo(g),
					(this.$attacksTableContainer = o("<span></span>")),
					this.$realAttacksTable.after(
						e,
						g,
						this.$attacksTableContainer
					);
			}
			async refresh() {
				let e = null;
				try {
					e = o(await Q.ajax({ url: Ie() }));
				} catch (e) {
					throw new Error(`Could not refresh site :( ${e}`);
				}
				if (e.find("p.error").length)
					throw new Error(
						`Could not refresh site :( ${e
							.find("p.error")
							.eq(0)
							.text()}`
					);
				xe.update(e),
					this.refillAttacksTable(
						...(await Kt(e, this.loadAttacksHistory()))
					);
			}
			async refreshIncomingAttacks() {
				this.timeoutObj = setTimeout(async () => {
					const e = performance.now();
					try {
						this.stopRefreshTimer(),
							await this.refresh(),
							this.startRefreshTimer();
					} catch (e) {
						Q.log(e);
					}
					$t || this.refreshIncomingAttacks(),
						Q.log(
							"refreshing took: ",
							Math.round(performance.now() - e)
						);
				}, 1e3 * this.refreshTimeout);
			}
			async loadAttacks() {
				this.stopRefreshTimer(),
					this.refillAttacksTable(
						...(await Kt(this.$page, this.loadAttacksHistory()))
					),
					this.refreshIncomingAttacks(),
					this.startRefreshTimer();
			}
			establishBroadcast() {
				const e = new BroadcastChannel("KCSAllyAttacks");
				e.postMessage("ping"),
					(e.onmessage = () => {
						($t = !0),
							clearTimeout(this.timeoutObj),
							clearInterval(this.refreshInterval),
							this.$realAttacksTable.before(
								`<div style="font-weight: bold; font-size: 19px; text-align: center;">${U.anotherTabProcessing}<div>`,
								"<br>"
							),
							e.close();
					});
			}
			stopRefreshTimer() {
				clearInterval(this.refreshInterval),
					this.$refreshRate.empty(),
					this.$refreshRate.append(E.$spinner());
			}
			updateRefreshTimer(e, t) {
				this.$refreshRate.text(`${e} / ${t}`);
			}
			startRefreshTimer() {
				let e = 0;
				const t = this.refreshTimeout;
				(this.refreshInterval = setInterval(() => {
					(e += 1), this.updateRefreshTimer(e, t);
				}, 1e3)),
					this.updateRefreshTimer(0, t);
			}
			display() {
				Ae.disableKaTimers(),
					Ae.limitAmountUpdated(30),
					this.hideRealAttacksTable(),
					this.establishBroadcast(),
					this.putOwnTables(),
					this.loadAttacks();
			}
		}
		class Et {
			constructor(e) {
				this.$page = e;
			}
			display() {
				this.$page
					.find("table.borderlist")
					.eq(2)
					.find("tr:not(:first-child)")
					.find("td:first-child")
					.each((e, t) => {
						const a = o(t),
							i = E.$edit();
						a.prepend(i),
							i.hover(() => {
								const e = W.queryString(
										a.next().find("a").eq(0).attr("href")
									).get("id"),
									t =
										F.getComplexItem(
											F.keys.memberOnlineWatcher,
											e
										) || {},
									n = [],
									s = Object.keys(t.history);
								s &&
									s.forEach((e, a) => {
										if (a > 0 && a % 2 == 0) {
											const e = Math.ceil(
												(t.history[a] -
													t.history[a - 1]) /
													1e3 /
													60
											);
											n.push(
												`${new Date(
													t.history[a]
												)} przez ${e} minut\n`
											);
										}
									});
								let r = "5 ostatnich online:\n";
								for (
									let e = n.length - 1;
									e > n.length - 5 - 1 && e > 0;
									e -= 1
								)
									r += n[e];
								i.attr("title", r);
							});
					}),
					(async function () {
						const e = async () => {
							o(await Q.ajax({ url: dt() }))
								.find("table.borderlist")
								.eq(2)
								.find("tr:not(:first-child)")
								.find("td:nth-child(2)")
								.each((e, t) => {
									const a = o(t),
										i = W.queryString(
											a.find("a").eq(0).attr("href")
										).get("id"),
										n = a.find('img[src*="/dots/"]');
									if (n.length > 0) {
										const e = n
												.eq(0)
												.attr("src")
												.match("red.png")
												? "offline"
												: "online",
											t =
												F.getComplexItem(
													F.keys.memberOnlineWatcher,
													i
												) || {};
										void 0 === t.lastStatus
											? ((t.lastStatus = "offline"),
											  (t.history = {}),
											  (t.history[0] =
													Ae.serverDate().getTime()))
											: t.lastStatus !== e &&
											  ((t.lastStatus = e),
											  (t.history[
													Object.keys(
														t.history
													).length
											  ] = Ae.serverDate().getTime())),
											F.setComplexItem(
												F.keys.memberOnlineWatcher,
												i,
												t
											);
									}
								});
						};
						setInterval(() => {
							e();
						}, 12e4),
							e();
					})();
			}
		}
		class Ot {
			constructor(e) {
				(this.$page = e),
					(this.$armyOutgoingTable = this.$page.find(
						'table.borderlist[style="empty-cells:show;"]'
					)),
					(this.$sendCoords = this.$page.find("#send_x, #send_y")),
					(this.$sendX = this.$sendCoords.eq(0)),
					(this.$sendY = this.$sendCoords.eq(1)),
					(this.$form = this.$page.find("form").eq(0)),
					(this.isModern =
						this.$page.find("div.boxOptions").length > 0),
					(this.$armyInputs = o()),
					(this.$maxBtns = o()),
					this.$form.find("input").each((e, t) => {
						const a = o(t);
						a.attr("name") in re.type &&
							((this.$armyInputs = this.$armyInputs.add(a)),
							(this.$maxBtns = this.$maxBtns.add(
								a.siblings("span")
							)));
					}),
					(this.$armyScoreContainer = o(
						'<div style="padding: 3px 0px 3px 0px; float: right; display: none; text-align: right;"></div>'
					)),
					this.isModern
						? this.$page
								.find("div.boxOptions")
								.eq(0)
								.before(this.$armyScoreContainer)
						: this.$page
								.find("table.borderlist")
								.eq(2)
								.after(this.$armyScoreContainer);
			}
			displayCancelArmyNoReload() {
				this.$armyOutgoingTable
					.find('a[href*="sendTroopCancel"]')
					.each((e, t) => {
						const a = o(t),
							i = a.parent().parent(),
							s = E.$cancel();
						a.replaceWith(s),
							s.one("click", async () => {
								const e = E.$spinner("17px");
								s.replaceWith(e);
								const t = i.find("a").eq(0).attr("href"),
									r = await Q.ajax({ url: a.attr("href") }),
									l = o(r).find(`a[href="${t}"]`);
								if (l.length) {
									i.html(l.parents("tr").html());
									const e = i.find("span.countdown");
									e.attr("reload", "false"),
										e.attr(
											"time",
											W.toNumber(e.attr("time")) +
												Ae.convertToKATimestamp(
													Ae.serverDate() -
														Ae.pageLoadDate
												)
										);
									const t = i.find('a[href*="info_command"]'),
										a = W.coordsToCoordList(t.text());
									t.after(E.$chains(`${a[0]}|${a[1]}`)),
										n.push(e.get(0));
								} else i.hide();
							});
					});
			}
			displayCopyCoords() {
				this.$armyOutgoingTable
					.find('a[href*="info_command"]')
					.each((e, t) => {
						const a = o(t),
							i = W.coordsToCoordList(a.text());
						a.after(E.$chains(`${i[0]}|${i[1]}`));
					});
			}
			displayLastTarget() {
				if (this.$sendX.val() < 1 || this.$sendY.val() < 1) {
					const e = F.getItem(F.keys.lastArmySendCoords);
					if (e) {
						const t = W.coordsToCoordList(e);
						this.$sendX.val(t[0]), this.$sendY.val(t[1]);
					}
				}
				this.$form.on("submit", () =>
					F.setItem(
						F.keys.lastArmySendCoords,
						`${this.$sendX.val()}|${this.$sendY.val()}`
					)
				);
			}
			displayArmyTemplates() {
				const e = o(
					`<div style="padding: 3px 0px 3px 0px;"><span style="font-weight: bold;">${U.templates}</span> </div>`
				);
				Object.values(ft.barracksTemplates).forEach((t) => {
					const a = o(
						`<span class="click"> ${t.description}</span>`
					).prepend(E.$arrow());
					e.append(a, " &nbsp;&nbsp; "),
						a.click(() => {
							const e = t.units;
							this.$armyInputs.val(""),
								Object.keys(e).forEach((t) => {
									this.$form
										.find(`input[name="${t}"]`)
										.val(e[t]);
								}),
								this.refreshView();
						});
				});
				const t = o('<span class="click"> Espias</span>').prepend(
					E.$arrow()
				);
				e.append(t, " &nbsp;&nbsp; "),
					t.click(() => {
						const e = {
							spy: Math.max(
								Math.floor(
									(W.toNumber(this.$maxBtns.eq(1).text()) -
										10) /
										9
								),
								0
							),
							heavy: Math.max(
								Math.floor(
									(W.toNumber(this.$maxBtns.eq(8).text()) -
										50) /
										9
								),
								0
							),
							bow: Math.max(
								Math.floor(
									(W.toNumber(this.$maxBtns.eq(10).text()) -
										50) /
										9
								),
								0
							),
						};
						this.$armyInputs.val(""),
							Object.keys(e).forEach((t) => {
								this.$form.find(`input[name="${t}"]`).val(e[t]);
							}),
							this.refreshView();
					}),
					this.isModern
						? this.$page.find("div.boxOptions").eq(0).before(e)
						: this.$page.find("table.borderlist").eq(2).after(e);
			}
			countArmyScoreAndCarryWeight() {
				let e = 0,
					t = 0;
				return (
					this.$armyInputs.each((a, i) => {
						const n = o(i),
							s = n.attr("name"),
							r = W.toNumber(n.val());
						r > 0 &&
							((e += r * re.type[s].points),
							(t += r * re.type[s].carry));
					}),
					[Math.round(e), t]
				);
			}
			refreshView() {
				const [e, t] = this.countArmyScoreAndCarryWeight();
				e > 0
					? this.$armyScoreContainer.show()
					: this.$armyScoreContainer.hide(),
					this.$armyScoreContainer.html(
						`${U.armyScore}${e}<br>${
							U.carryWeight
						}${W.numberToPrettyString(t, 5)}`
					);
				const a = xe.units;
				this.$armyInputs.each((e, t) => {
					const i = o(t);
					i.val() > a[i.attr("name")]
						? i.css("background-color", "red")
						: i.css("background-color", "");
				});
			}
			displayQuickCoords() {
				const e = o(
						'<div style="display: inline-block; vertical-align: top;"></div>'
					),
					t = o(
						`<div style="display: inline-block; padding: 3px 0px 3px 0px; font-weight: bold;">${U.quickCoords} &nbsp;</div>`
					);
				if (!ft.barracksQuickCoords) return;
				const a = o(
						'<div style="display: inline-block; vertical-align: text-top;"></div>'
					),
					i = (e, t) => {
						e.on("click", () => {
							const e = t.split("|");
							this.$sendX.val(e[0]), this.$sendY.val(e[1]);
						});
					};
				for (const [e, t] of Object.entries(ft.barracksQuickCoords)) {
					const n = o('<div class="click"></div>');
					n.append(E.$arrow(), " ", e, " ", t), a.append(n), i(n, e);
				}
				if ((e.append(t, a), this.isModern)) {
					const t = this.$page.find(".background").eq(11);
					t.parent().css("width", "810px"),
						t.parent().css("height", "auto"),
						t.css("position", "static"),
						t.append(e);
				} else this.$page.find("h2").eq(1).before(e);
			}
			displayArmyScore() {
				this.$maxBtns.click(() => this.refreshView()),
					this.refreshView();
			}
			displayCoordsCleanup() {
				this.$sendCoords.focusin(() => {
					this.$sendCoords.each((e, t) => {
						const a = o(t);
						"0" === a.val() && a.val("");
					});
				}),
					this.$sendCoords.focusout(() => {
						this.$sendCoords.each((e, t) => {
							const a = o(t);
							"" === a.val() && a.val("0");
						});
					});
			}
			display() {
				this.$page.find("span.countdown").attr("reload", "false"),
					this.displayArmyScore(),
					this.displayLastTarget(),
					this.displayCopyCoords(),
					this.displayCoordsCleanup(),
					this.displayCancelArmyNoReload(),
					this.displayArmyTemplates(),
					this.displayQuickCoords(),
					this.$armyInputs.on("change keyup paste", () => {
						this.refreshView();
					});
			}
		}
		class Pt {
			constructor(e) {
				(this.$page = e),
					(this.$groupsTable = this.$page
						.find("table.borderlist")
						.eq(2)),
					(this.$filloutInp = this.$page
						.find("#fillOutButton")
						.eq(0)),
					(this.$recruitBtn = this.$page
						.find('input[name="startRecruition"]')
						.eq(0)),
					(this.$form = this.$page.find("form").eq(0));
			}
			stupidButtonSaveArmy() {
				const e = 5 * Math.ceil((60 * Math.random()) / 5) + 60,
					t = 5 * Math.ceil((150 * Math.random()) / 5) + 450,
					a = Math.ceil(1e4 * Math.random()) + 23e3,
					i = W.toNumber(
						W.queryString(this.$form.attr("action")).get("group_id")
					),
					n = o('<span class="click">Defensas</span>'),
					s = o('<span class="click">Off</span>'),
					r = o('<span class="click">Defensas Estaticos</span>'),
					l = o(
						'<div style="float: right;">(test)sobrescribir la configuración de guerra para el grupo: </span>'
					);
				l.append(
					n,
					" | ",
					r,
					" | ",
					s,
					"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
				),
					this.$groupsTable.find("th").eq(0).append(l),
					n.click(async () => {
						await Q.ajax({
							url: `zjax.php?func=massrecruitDefinitions&fclass=game&act=save&group_id=${i}&req_farmer=1780&req_sword=20&req_spear=20&req_spy=500&req_ram=20&req_heavy=9999&req_kata=0&req_light=0&req_bow=0&req_axe=0&req_snob=0&mode=hold_niveau&arrange=custom&req_workers=0&req_stone=0&req_wood=0&req_iron=0&prio_farmer=0&prio_sword=1&prio_spear=2&prio_spy=3&prio_ram=4&prio_heavy=5&prio_kata=6&prio_light=7&prio_bow=8&prio_axe=9&prio_snob=10`,
						}),
							setTimeout(() => window.location.reload(), 1e3);
					}),
					s.click(async () => {
						await Q.ajax({
							url: `zjax.php?func=massrecruitDefinitions&fclass=game&act=save&group_id=${i}&req_farmer=1780&req_sword=20&req_spear=20&req_spy=1000&req_heavy=100&req_kata=${e}&req_axe=${a}&req_ram=${t}&req_light=9999&req_bow=0&req_snob=0&mode=hold_niveau&arrange=custom&req_workers=0&req_stone=0&req_wood=0&req_iron=0&prio_farmer=0&prio_sword=1&prio_spear=2&prio_spy=3&prio_heavy=4&prio_kata=5&prio_axe=6&prio_ram=7&prio_light=8&prio_bow=9&prio_snob=10`,
						}),
							setTimeout(() => window.location.reload(), 1e3);
					}),
					r.click(async () => {
						await Q.ajax({
							url: `zjax.php?func=massrecruitDefinitions&fclass=game&act=save&group_id=${i}&req_farmer=1780&req_sword=20&req_spear=20&req_spy=500&req_ram=20&req_bow=21000&req_heavy=9999&req_kata=0&req_light=0&req_axe=0&req_snob=0&mode=hold_niveau&arrange=custom&req_workers=0&req_stone=0&req_wood=0&req_iron=0&prio_farmer=0&prio_sword=1&prio_spear=2&prio_spy=3&prio_ram=4&prio_bow=5&prio_heavy=6&prio_kata=7&prio_light=8&prio_axe=9&prio_snob=10`,
						}),
							setTimeout(() => window.location.reload(), 1e3);
					});
			}
			display() {
				this.$groupsTable.find("a").each((e, t) => {
					const a = o(t);
					a.attr("href", `${a.attr("href")}&n=999`);
				}),
					this.stupidButtonSaveArmy();
			}
		}
		let Ft;
		const Dt = (e) =>
			W.queryString(e.find("a.widget_icon").eq(2).attr("href")).get("p");
		const Nt = (e) => W.toNumber(e.find("h1").eq(1).text());
		async function Jt(e, t, a) {
			const i = (function (e) {
				let t = null;
				return Object.keys(e).some((a) => e[a] > 0 && ((t = a), !0)), t;
			})(a);
			return (
				Ft ||
					(Ft = new Promise(async (a) => {
						let n;
						try {
							n = o(
								await Q.ajax({
									url: Ke(e),
									method: "POST",
									data: `send_x=${t[0]}&send_y=${t[1]}&support=1&${i}=1`,
									timeout: 12e3,
								})
							);
						} catch (e) {
							return (
								Q.log(
									"Could not fetch attack session id :(",
									e
								),
								a([F.getItem(F.keys.attackSession), 0])
							);
						}
						if (n.find("p.error").length)
							return (
								Q.log(
									"Could not fetch attack session id :(",
									n.find("p.error").text()
								),
								a([F.getItem(F.keys.attackSession), Nt(n)])
							);
						const s = n.find("form").eq(0).attr("action");
						if (s) {
							const e = W.queryString(s).get("p");
							return (
								F.setItem(F.keys.attackSession, e),
								F.setItem(
									F.keys.sessionRetrievalTime,
									Ae.serverDate()
								),
								F.setItem(F.keys.gameSession, Dt(n)),
								a([e, Nt(n)])
							);
						}
						return a([F.getItem(F.keys.attackSession), 0]);
					})),
				Ft
			);
		}
		var Zt = {
			game: Dt,
			attack: async function (e, t, a) {
				const i = F.getItem(F.keys.attackSession);
				if (i) {
					const e = F.getItem(F.keys.gameSession),
						t = F.getItem(F.keys.sessionRetrievalTime),
						a = i;
					if (Ae.serverDate() - Ae.pageLoadDate < 30 && Dt(h) === e)
						return a;
					if (Ae.serverDate() - t < 30) return a;
				}
				return (await Jt(e, t, a))[0];
			},
			attackForced: async function (...e) {
				return (await Jt(...e))[0];
			},
			attackWithRaxLvl: Jt,
		};
		class Yt {
			constructor(e) {
				(this.$page = e),
					(this.$contentPane = this.$page
						.find("div.contentpane")
						.eq(1)),
					(this.autoRecruitmentQueue =
						F.getComplexItem(F.keys.barracksAutoRecruit, xe.id) ||
						{}),
					(this.refreshTimeout = null),
					(this.maxRefreshTime = 18e4),
					(this.autoRecruitCheckTime = 2e4),
					(this.recruitTimes = {}),
					(this.refreshCount = 0),
					(this.rallySendWhenCount = 20),
					(this.refreshMax = Math.floor(36e5 / this.maxRefreshTime)),
					(this.rallyRemember = {
						[re.type.farmer.name]: 0,
						[re.type.sword.name]: 0,
						[re.type.spear.name]: 0,
						[re.type.axe.name]: 0,
						[re.type.bow.name]: 0,
						[re.type.spy.name]: 0,
						[re.type.light.name]: 0,
						[re.type.heavy.name]: 0,
						[re.type.ram.name]: 0,
						[re.type.kata.name]: 0,
						[re.type.snob.name]: 0,
					}),
					(this.rallyCoords = { $xCoord: null, $yCoord: null }),
					(this.$recruitmentRallyBox = null),
					(this.rallyEnabled = !1),
					(this.rallyCount = 0);
			}
			get isModern() {
				return this.$contentPane.find("div.unitbox").length > 0;
			}
			get underRecruitmentCount() {
				return this.$contentPane.find('a[href*="cancelRecruit"]')
					.length;
			}
			get recruitingUnit() {
				if (this.underRecruitmentCount) {
					const e = this.$contentPane
						.find(".borderlist")
						.eq(0)
						.find("img")
						.attr("src");
					return re.nameFromImgSrc(e);
				}
				return null;
			}
			showRallySend() {
				if (
					(this.underRecruitmentCount &&
						(!this.$recruitmentRallyBox &&
							this.rallyEnabled &&
							((this.$recruitmentRallyBox = o(
								'<div class="kcs_modern_box" style="position: absolute; top: 240px; left: 330px; height: 30px;\n        width: 400px; text-align: center; line-height: 30px;"></div>'
							)),
							this.$contentPane
								.find("table.borderlist")
								.eq(0)
								.after(this.$recruitmentRallyBox),
							(this.rallyCount = 0),
							this.updateRallySend()),
						this.$recruitmentRallyBox &&
							this.rallyEnabled &&
							this.updateRallySend()),
					this.$recruitmentRallyBox && !this.rallyEnabled)
				) {
					this.$recruitmentRallyBox.remove(),
						(this.$recruitmentRallyBox = null);
					for (const e of Object.keys(this.rallyRemember))
						this.rallyRemember[e] = 0;
				}
			}
			updateRallySend() {
				const e = `<b>[${Number(
					this.rallyCoords.$xCoord.val()
				)}|${Number(this.rallyCoords.$yCoord.val())}]</b>`;
				this.$recruitmentRallyBox &&
					this.$recruitmentRallyBox.html(
						`${U.willRally(e)} ${this.rallyCount}/20`
					);
			}
			handleRallySend(e) {
				if (this.rallyEnabled) {
					const t = Number(this.rallyCoords.$xCoord.val()),
						a = Number(this.rallyCoords.$yCoord.val());
					if (!(t > 0 && a > 0)) return;
					this.rallyRemember[e] += 1;
					let i = 0;
					for (const e of Object.values(this.rallyRemember))
						e > 0 && (i += e);
					if (
						((this.rallyCount = i),
						this.updateRallySend(),
						i < this.rallySendWhenCount)
					)
						return;
					if (t && a) {
						let i = "";
						for (const [e, t] of Object.entries(this.rallyRemember))
							t > 0 &&
								((i += `&${e}=${t}`),
								(this.rallyRemember[e] = 0));
						setTimeout(async () => {
							try {
								await Q.ajax({ url: De() });
								const n = await Zt.attackForced(xe.id, [t, a], {
									[e]: 1,
								});
								await Q.ajax({
									url: Me(xe.id, n),
									method: "POST",
									data: `send_x=${t}&send_y=${a}&support=1${i}`,
								});
							} catch (e) {
								Q.log(
									`Had problems with sending units away to ${t}|${a} :(`
								);
							}
						}, 5e3);
					}
				}
			}
			maxRecruitableAmount(e) {
				if (this.isRecruitable(e)) {
					const t = this.unitDetails(e);
					return Math.min(
						Math.floor(xe.stone / t.stone),
						Math.floor(xe.wood / t.wood),
						Math.floor(xe.iron / t.iron),
						Math.floor(xe.settlers / t.settlers)
					);
				}
				return 0;
			}
			isResearchable(e) {
				return (
					this.$contentPane
						.find(`a[href$="unit=${e}"]`)
						.eq(0)
						.parent()
						.parent()
						.find('a[href$="research"]').length > 0
				);
			}
			isRecruitable(e) {
				return this.$contentPane.find(`input[name="${e}"]`).length > 0;
			}
			retrieveRecruitTimes() {
				this.recruitTimes = {};
				const { isModern: e } = this;
				this.$contentPane
					.find("form")
					.eq(0)
					.find('a[href*="help.php"]')
					.each((t, a) => {
						const i = o(a),
							n = W.queryString(i.attr("href")).get("unit");
						this.recruitTimes[n] = e
							? Ae.convertHHMMSSStringIntoSeconds(
									i
										.parent()
										.parent()
										.parent()
										.children()
										.eq(1)
										.children()
										.eq(5)
										.children()
										.text()
							  )
							: Ae.convertHHMMSSStringIntoSeconds(
									i
										.parent()
										.parent()
										.children()
										.eq(5)
										.contents()
										.get(0).nodeValue
							  );
					});
			}
			resetSingleUnitProgress() {
				if (this.underRecruitmentCount) {
					this.showRallySend();
					const e = this.$contentPane.find("div.progress").eq(1),
						t = Number(e.attr("start")),
						a = Number(e.attr("end")),
						i = this.$contentPane
							.find("table.borderlist")
							.eq(1)
							.find("td")
							.eq(0)
							.text(),
						n = W.toNumber(i.substring(i.indexOf("/"))),
						s = Math.round(((a - t) / n) * 1e4) / 1e4,
						r = this.$contentPane.find("div.progress").eq(0),
						o = this.$contentPane.find("span.countdown").eq(0),
						l = Math.round(1e4 * Number(r.attr("start"))) / 1e4,
						c = Math.round(1e4 * (l + s)) / 1e4;
					if (Ae.serverDate() > 1e3 * c) {
						const e = Number(o.attr("time"));
						r.attr("start", c),
							r.attr("end", c + s),
							o.attr("time", e + s);
						const t = this.recruitingUnit;
						this.handleRallySend(t);
					}
				} else this.showRallySend();
			}
			unitDetails(e) {
				return {
					stone: re.type[e].cost[0],
					wood: re.type[e].cost[1],
					iron: re.type[e].cost[2],
					settlers: re.type[e].cost[3],
					time: this.recruitTimes[e],
				};
			}
			displayAutoRecruitmentButtons() {
				const { isModern: e } = this;
				this.$contentPane
					.find("form")
					.eq(0)
					.find('a[href^="help"]')
					.each((t, a) => {
						const i = o(a);
						if (
							1 ===
							(e
								? i.parent().parent().parent()
								: i.parent().parent()
							).find("a").length
						) {
							const e = W.queryString(i.attr("href")).get("unit"),
								t = this.autoRecruitmentQueue[e]
									? E.$dotGreen()
									: E.$dotRed();
							i.before(t, " "),
								t.click(() => {
									this.autoRecruitmentQueue[e]
										? delete this.autoRecruitmentQueue[e]
										: (this.autoRecruitmentQueue[e] = !0),
										t.attr(
											"src",
											(this.autoRecruitmentQueue[e]
												? E.$dotGreen()
												: E.$dotRed()
											).attr("src")
										),
										F.setComplexItem(
											F.keys.barracksAutoRecruit,
											xe.id,
											this.autoRecruitmentQueue
										);
								});
						} else i.before(E.$dotGrey(), " ");
					});
			}
			displayCancelButtons() {
				let e = 0;
				this.$contentPane
					.find('a[href*="cancelRecruit"]')
					.each((t, a) => {
						const i = o(a),
							n = E.$cancel();
						i.after(n),
							i.hide(),
							n.one("click", async () => {
								e += 1;
								const t = E.$spinner("17px");
								n.replaceWith(t);
								let a = null;
								try {
									(a = o(
										await Q.ajax({ url: i.attr("href") })
									)),
										t.css("stroke", "green"),
										await Ae.wait(800),
										(e -= 1);
								} catch (t) {
									e -= 1;
								}
								if (0 === e)
									if (a) this.refreshPage(a);
									else {
										const e = o(
											await Q.ajax({ url: Ne() })
										);
										this.refreshPage(e);
									}
							});
					});
			}
			displayResearchButtons() {
				this.isModern ||
					this.$contentPane.find("td.notice").each((e, t) => {
						const a = o(t),
							i = o(
								`<span class="kcs_button kcs_recruitment_button">${U.research}</span>`
							);
						a.children().hide(),
							a.css("text-align", "right"),
							a.append(i),
							i.click("click", async () => {
								window.location.href = a
									.children()
									.eq(0)
									.attr("href");
							});
					});
			}
			async displayRecruitmentCost(e, t) {
				let a = W.toNumber(t);
				Number.isFinite(a) || (a = 1);
				const i = this.unitDetails(e),
					n = W.numberToPrettyString(i.stone * a, 99999),
					s = W.numberToPrettyString(i.wood * a, 99999),
					r = W.numberToPrettyString(i.iron * a, 99999),
					o = W.numberToPrettyString(i.settlers * a, 99999),
					l = Ae.convertDurationInSecondsIntoHMSString(
						Math.ceil(i.time * a)
					),
					c = this.$contentPane
						.find("form")
						.eq(0)
						.find(`a[href$="${e}"]`)
						.eq(0)
						.parent()
						.parent();
				if (this.isModern) {
					const e = c.parent().children().eq(1).children();
					e.eq(1).children().text(n),
						e.eq(2).children().text(s),
						e.eq(3).children().text(r),
						e.eq(4).children().text(o),
						e.eq(5).children().text(l);
				} else {
					const e = c.children();
					(e.eq(1).contents().get(1).nodeValue = ` ${n}`),
						(e.eq(2).contents().get(1).nodeValue = ` ${s}`),
						(e.eq(3).contents().get(1).nodeValue = ` ${r}`),
						(e.eq(4).contents().get(1).nodeValue = ` ${o}`),
						(e.eq(5).contents().get(0).nodeValue = l);
				}
			}
			refreshAfterTimeout(e = this.maxRefreshTime) {
				clearTimeout(this.refreshTimeout);
				let t = e;
				if (this.underRecruitmentCount) {
					const e =
						1e3 *
						(W.toNumber(
							this.$contentPane
								.find("div.progress")
								.eq(1)
								.attr("end")
						) -
							Ae.convertToKATimestamp(Ae.serverDate()) +
							1);
					t = e < t ? e : t;
				}
				this.refreshTimeout = setTimeout(async () => {
					clearTimeout(this.refreshTimeout),
						(this.refreshTimeout = null);
					try {
						this.refreshCount += 1;
						const e = await Q.ajax({ url: Ne() });
						this.refreshPage(o(e)),
							this.refreshCount >= this.refreshMax &&
								setTimeout(() => {
									window.location.href = Ne();
								}, 2e3);
					} catch (e) {
						Q.log("Could not refresh site :("),
							this.refreshAfterTimeout(2e4);
					}
				}, t);
			}
			refreshPage(e) {
				if (e) {
					e.find("script").eq(0).remove();
					const t = this.$contentPane
							.find("form")
							.eq(0)
							.serializeArray(),
						a = e.find("div.contentpane").eq(1);
					xe.update(e),
						this.$contentPane.html(a.html()),
						this.displayRecruitmentButtons(),
						this.displayRallyPoint(),
						this.displayAutoRecruitmentButtons(),
						this.displayCancelButtons(),
						this.displayResearchButtons(),
						this.retrieveRecruitTimes(),
						Ae.reloadKaTimers(this.$page);
					const i = this.$contentPane
						.find("form")
						.eq(0)
						.find("input");
					t.forEach((e) => {
						e.value &&
							i
								.filter(`[name="${e.name}"]`)
								.eq(0)
								.val(e.value)
								.trigger("change");
					});
				}
				this.refreshAfterTimeout();
			}
			displayRecruitmentButtons() {
				const { isModern: e } = this;
				if (!e) {
					const e = this.$contentPane.find("table.borderlist").last();
					e.css("table-layout", "fixed"), e.find("tr").last().hide();
					const t = e.find("th");
					t.eq(3).css("width", "95px"),
						t.eq(4).css("width", "190px"),
						t.eq(2).text(U.time).css("width", "70px"),
						e
							.find("td")
							.css("white-space", "nowrap")
							.css("overflow", "hidden");
				}
				this.$contentPane.find("input").last().remove(),
					this.$contentPane.find("input").each((t, a) => {
						const i = o(a),
							n = i.siblings("span").eq(0),
							s = i.attr("name"),
							r = this.maxRecruitableAmount(s);
						let l, c;
						i
							.css("width", "53px")
							.prop("maxlength", "5")
							.prop("onchange", null)
							.prop("type", "number")
							.prop("min", "0")
							.prop("max", r),
							n.prop("onclick", null).text(`(${r})`),
							e
								? ((c = i
										.parent()
										.parent()
										.find("span.awesome-button")
										.children()
										.eq(0)),
								  c.prop("onclick", null),
								  c.parent().addClass("kcs_awesome_button"),
								  (l = E.$spinner("17px")))
								: ((c = o(
										`<span class="kcs_button kcs_recruitment_button">${U.recruit}</span>`
								  )),
								  i.before(c),
								  (l = E.$spinner("17px"))),
							c.click(async () => {
								const e = i.val();
								e > 0 &&
									e <= r &&
									(n.replaceWith(l),
									this.refreshPage(
										await this.recruit(s, i.val())
									));
							}),
							n.click(() => {
								W.toNumber(i.val()) === r
									? i.val("")
									: i.val(r),
									this.displayRecruitmentCost(s, i.val());
							}),
							i.on("paste change keyup", () => {
								this.displayRecruitmentCost(s, i.val());
							});
					});
			}
			async recruit(e, t) {
				if (this.isRecruitable(e)) {
					let a;
					if (
						((a =
							null == t
								? this.maxRecruitableAmount(e)
								: Math.min(t, this.maxRecruitableAmount(e))),
						0 === a)
					)
						return this.$page;
					try {
						const t = await Q.ajax({
							url: this.$contentPane
								.find("form")
								.eq(0)
								.attr("action"),
							method: "POST",
							data: `${e}=${a}`,
						});
						return (
							this.$contentPane
								.find("form")
								.eq(0)
								.find("input")
								.val(""),
							o(t)
						);
					} catch (e) {
						return null;
					}
				}
				return null;
			}
			async checkAutoRecruitment() {
				if (this.underRecruitmentCount > 1) return;
				let e, t;
				Object.keys(this.autoRecruitmentQueue).some((a) => {
					if (this.autoRecruitmentQueue[a]) {
						const i = this.unitDetails(a);
						if (
							((t = Math.min(
								this.maxRecruitableAmount(a),
								Math.floor(3600 / i.time)
							)),
							t > 0)
						)
							return (e = a), !0;
					}
					return !1;
				}),
					e && this.refreshPage(await this.recruit(e, t));
			}
			displayTooMuchWarn() {
				this.$contentPane.find("input").each((e, t) => {
					const a = o(t),
						i = a.attr("name");
					a.on("change keyup paste", () => {
						a.val() > this.maxRecruitableAmount(i)
							? a.css("background-color", "red")
							: a.css("background-color", "");
					});
				});
			}
			displayRallyPoint() {
				const e = F.getComplexItem(F.keys.rallyPoint, xe.id) || {};
				this.rallyEnabled = e && e.enabled;
				let t = "",
					a = "";
				if (e.coords) {
					const i = W.coordsToCoordList(e.coords);
					[t, a] = i;
				}
				const i = o(
					`<div class="kcs_modern_box" style="display: inline-block; padding: 5px 14px 5px 8px;">${U.rallyPoint}</div>`
				);
				(this.rallyCoords.$xCoord = o(
					`<input id="xCoord" style="width: 50px;" value="${t || 0}">`
				)),
					(this.rallyCoords.$yCoord = o(
						`<input id="yCoord" style="width: 50px;" value="${
							a || 0
						}">`
					));
				const n = o(
					`<input type="checkbox" style="margin: 0 -1px -1px 0; width: 16px; height: 16px;"${
						this.rallyEnabled ? " checked" : ""
					}>`
				);
				i.append(
					" x: ",
					this.rallyCoords.$xCoord,
					" y: ",
					this.rallyCoords.$yCoord,
					" ",
					n
				),
					this.$contentPane.append(i);
				const s = o()
					.add(this.rallyCoords.$xCoord)
					.add(this.rallyCoords.$yCoord);
				s.on("keyup", (e) => {
					const t = o(e.currentTarget).val().split("|");
					t.length > 1 &&
						(this.rallyCoords.$xCoord.val(t[0]),
						this.rallyCoords.$yCoord.val(t[1]));
				}),
					s.focusin(() => {
						s.each((e, t) => {
							const a = o(t);
							"0" === a.val() && a.val("");
						});
					}),
					s.focusout(() => {
						s.each((e, t) => {
							const a = o(t);
							"" === a.val() && a.val("0");
						});
						const e = F.getComplexItem(F.keys.rallyPoint, xe.id);
						F.setComplexItem(F.keys.rallyPoint, xe.id, {
							...e,
							coords: `${this.rallyCoords.$xCoord.val()}|${this.rallyCoords.$yCoord.val()}`,
						});
					}),
					n.on("change", () => {
						const e = F.getComplexItem(F.keys.rallyPoint, xe.id);
						(this.rallyEnabled = n.prop("checked")),
							F.setComplexItem(F.keys.rallyPoint, xe.id, {
								...e,
								enabled: n.prop("checked"),
							}),
							this.underRecruitmentCount && this.showRallySend();
					});
			}
			display() {
				setInterval(() => {
					this.checkAutoRecruitment();
				}, this.autoRecruitCheckTime),
					setInterval(() => {
						this.resetSingleUnitProgress();
					}, 350),
					this.displayRecruitmentButtons(),
					this.displayTooMuchWarn(),
					this.displayRallyPoint(),
					this.displayAutoRecruitmentButtons(),
					this.displayCancelButtons(),
					this.displayResearchButtons(),
					this.retrieveRecruitTimes(),
					Ae.reloadKaTimers(this.$page),
					this.refreshAfterTimeout(),
					this.underRecruitmentCount && this.showRallySend();
			}
		}
		class Qt {
			constructor(e) {
				(this.$page = e), (this.$form = this.$page.find("form").eq(0));
				const t = this.$form.attr("action");
				this.attackSession = W.queryString(t).get("p");
			}
			changeCatapultTarget(e) {
				const t = this.$page.find('select[name*="kata_target"]');
				t.length && t.val(e);
			}
			display() {
				this.changeCatapultTarget(ft.defaultCatapultTarget),
					this.$page.find("#attack_protect").after(
						o("<span> </span>").prepend(" ", E.$arrow()),
						Q.$spawnMultiSendRange(
							ft.multiSendOptions,
							{
								url: this.$form.attr("action"),
								method: "POST",
								data: this.$form.serialize(),
							},
							De()
						)
					);
			}
		}
		class Vt {
			constructor(e) {
				(this.$page = e),
					(this.$contentPane = this.$page
						.find("div.contentpane")
						.eq(1)),
					(this.refreshTimeout = null),
					(this.autoBuildQueue =
						F.getComplexItem(F.keys.castleAutoBuild, xe.id) || {}),
					(this.maxRefreshTime = 18e4),
					(this.autoBuildCheckTime = 2e4),
					(this.cumulativeCosts = {}),
					(this.refreshCount = 0),
					(this.refreshMax = Math.floor(36e5 / this.maxRefreshTime));
			}
			get underConstructionCount() {
				return this.$contentPane.find('a[href*="cancelBuilding"]')
					.length;
			}
			get isModern() {
				return this.$contentPane.find("div.box").length > 0;
			}
			getBuildingLevel(e) {
				if (this.underConstructionCount) {
					const t = this.$contentPane
						.find('a[href*="cancelBuilding"]')
						.eq(0)
						.parent()
						.parent()
						.parent()
						.find(`img[src$="${e}.png"]`)
						.last();
					if (t.length) return W.toNumber(t.parent().text());
				}
				const t = W.toNumber(
					this.$contentPane
						.find(`a[href*="s=build_${e}"]`)
						.not('[href*="&a="]')
						.not('[href*="&m="]')
						.eq(0)
						.parent()
						.text()
				);
				return null === t ? 0 : t;
			}
			getMaxBuildableBuildingLevelWithCurrentResources(e) {
				const t = this.getBuildingLevel(e);
				this.cumulativeCosts[e] = [];
				const a = [
						xe.stone,
						xe.wood,
						xe.iron,
						Math.max(xe.settlers, 0),
					],
					i = [0, 0, 0, 0];
				let n = 0;
				for (let s = t; s < O.type[e].cost.length; s += 1) {
					if (
						(i.forEach((t, a) => {
							i[a] += O.type[e].cost[s][a];
						}),
						!a.every((e, t) => a[t] - i[t] >= 0))
					)
						break;
					if (
						(this.cumulativeCosts[e].push(i.slice()),
						(n += 1),
						!Ce && n + 1 > 3 - this.underConstructionCount)
					)
						break;
				}
				return n;
			}
			displayBuildingCosts(e, t) {
				let a = W.toNumber(t);
				(Number.isNaN(a) || null === a || "" === a) && (a = 1),
					a > this.cumulativeCosts[e].length &&
						(a = this.cumulativeCosts[e].length - 1);
				const i = this.cumulativeCosts[e][a - 1],
					n = this.$contentPane
						.find(`a[href*="s=build_${e}"]`)
						.not('[href*="&a="]')
						.not('[href*="&m="]')
						.eq(0)
						.parent()
						.parent()
						.children();
				this.isModern
					? (n.eq(4).text(W.numberToPrettyString(i[1])),
					  n.eq(5).text(W.numberToPrettyString(i[0])),
					  n.eq(6).text(W.numberToPrettyString(i[2])),
					  n.eq(7).text(W.numberToPrettyString(i[3])))
					: (n
							.eq(1)
							.contents()
							.last()
							.text(W.numberToPrettyString(i[0])),
					  n
							.eq(2)
							.contents()
							.last()
							.text(W.numberToPrettyString(i[1])),
					  n
							.eq(3)
							.contents()
							.last()
							.text(W.numberToPrettyString(i[2])),
					  n
							.eq(4)
							.contents()
							.last()
							.text(W.numberToPrettyString(i[3])));
			}
			displayCancelButtons() {
				let e = 0;
				this.$contentPane
					.find('a[href*="cancelBuilding"]')
					.each((t, a) => {
						const i = o(a),
							n = E.$cancel();
						i.after(n),
							i.hide(),
							n.one("click", async () => {
								e += 1;
								const t = E.$spinner("17px");
								n.replaceWith(t);
								let a = null;
								try {
									(a = o(
										await Q.ajax({ url: i.attr("href") })
									)),
										t.css("stroke", "green"),
										await Ae.wait(800),
										(e -= 1);
								} catch (t) {
									e -= 1;
								}
								if (0 === e)
									if (a) this.refreshPage(a);
									else {
										const e = o(
											await Q.ajax({ url: Ye() })
										);
										this.refreshPage(e);
									}
							});
					});
			}
			displayAutoBuildButtons() {
				const { isModern: e } = this;
				this.$contentPane
					.find('a[href*="s=build"]')
					.not('[href*="&a="]')
					.not('[href*="&m="]')
					.each((t, a) => {
						const i = o(a),
							n = W.queryString(i.attr("href"))
								.get("s")
								.substring(6);
						let s;
						if (
							((s = e ? i : i.parents().children().eq(0)),
							this.getBuildingLevel(n) === O.type[n].cost.length)
						)
							s.before(E.$dotGrey(), " ");
						else {
							const e = this.autoBuildQueue[n]
								? E.$dotGreen()
								: E.$dotRed();
							s.before(e, " "),
								e.click(() => {
									this.autoBuildQueue[n]
										? delete this.autoBuildQueue[n]
										: (this.autoBuildQueue[n] = !0),
										e.attr(
											"src",
											(this.autoBuildQueue[n]
												? E.$dotGreen()
												: E.$dotRed()
											).attr("src")
										),
										F.setComplexItem(
											F.keys.castleAutoBuild,
											xe.id,
											this.autoBuildQueue
										);
								});
						}
					});
			}
			async build(e, t) {
				const a = this.$contentPane
					.find(`a[href*="build=${e}"]`)
					.not('[href^="help"]')
					.eq(0);
				if (a.length) {
					const e = [];
					for (let i = 0; i < t; i += 1)
						e.push(Q.ajax({ url: a.attr("href") }));
					try {
						const t = await Promise.all([...e]);
						return o(t[t.length - 1]);
					} catch (e) {
						return null;
					}
				}
				return null;
			}
			displayBuildOptions() {
				let e = 0;
				const { isModern: t } = this;
				if (!t) {
					const e = this.$contentPane
							.find('img[src*="img/buildings/main.png"]')
							.last()
							.parents("table.borderlist")
							.eq(0),
						t = e.find("th").eq(0),
						a = e.find("th").eq(3),
						i = e.find("table").find("table"),
						n = i.find("td:nth-child(1)"),
						s = i.find("td:nth-child(2)"),
						r = i.find("td:nth-child(3)"),
						o = i.find("td:nth-child(4)"),
						l = i.find("td:nth-child(5)"),
						c = i.find("td:nth-child(6)");
					t.css("width", "218px"),
						a.css("width", "204px"),
						n.css("width", "213px"),
						s.css("width", "74px"),
						r.css("width", "74px"),
						o.css("width", "74px"),
						l.css("width", "45px"),
						c.css("width", "73px");
				}
				this.$contentPane
					.find('a[href*="build="]')
					.not('[href^="help"]')
					.each((a, i) => {
						const n = o(i),
							s = W.queryString(n.attr("href")).get("build"),
							r =
								this.getMaxBuildableBuildingLevelWithCurrentResources(
									s
								),
							l = o(
								t
									? '<div class="kcs_building_button_background"></div>'
									: '<div style="margin-left: 10px;"></div>'
							),
							c = o(
								`<span class="kcs_button">${U.buildLevels}</span>`
							),
							d = o(
								`<input type="number" min="1" max="${r}" class="kcs_building_level" value="1"></input>`
							),
							p = o(`<span class="click">(${r})</span>`);
						l.append(c, d, p),
							n.hide(),
							n.parent().css("text-align", "left"),
							n.after(l),
							p.click(() => {
								W.toNumber(d.val()) === r
									? (d.val(1),
									  this.displayBuildingCosts(s, 1))
									: (d.val(r),
									  this.displayBuildingCosts(s, r));
							}),
							c.click(async () => {
								if (
									(Ce ||
										!(this.underConstructionCount > 2) ||
										!1 !== window.confirm(U.buildAnyway)) &&
									d.val() > 0
								) {
									e += 1;
									const t = E.$spinner("17px");
									p.replaceWith(t);
									let a = null;
									(a = await this.build(s, d.val())),
										t.css("stroke", "green"),
										await Ae.wait(800),
										(e -= 1),
										0 === e && this.refreshPage(a);
								}
							}),
							d.on("change click keyup paste", async () => {
								this.displayBuildingCosts(s, d.val());
							});
					});
			}
			refreshAfterTimeout(e = this.maxRefreshTime) {
				clearTimeout(this.refreshTimeout);
				let t = e;
				if (this.underConstructionCount) {
					const e =
						1e3 *
						(W.toNumber(
							this.$contentPane
								.find("div.progress")
								.eq(0)
								.attr("end")
						) -
							Ae.convertToKATimestamp(Ae.serverDate()) +
							1);
					t = e < t ? e : t;
				}
				this.refreshTimeout = setTimeout(async () => {
					clearTimeout(this.refreshTimeout),
						(this.refreshTimeout = null);
					try {
						this.refreshCount += 1;
						const e = await Q.ajax({ url: Ye() });
						this.refreshPage(o(e)),
							this.refreshCount >= this.refreshMax &&
								setTimeout(() => {
									window.location.href = Ye();
								}, 2e3);
					} catch (e) {
						Q.log("Could not refresh site :("),
							this.refreshAfterTimeout(2e4);
					}
				}, t);
			}
			async checkAutoBuild() {
				let e;
				Object.keys(this.autoBuildQueue).some((t) => {
					if (this.autoBuildQueue[t]) {
						if (
							this.$contentPane
								.find(`a[href*="build=${t}"]`)
								.eq(0).length &&
							(Ce || this.underConstructionCount < 3)
						)
							return (e = t), !0;
					}
					return !1;
				}),
					e && this.refreshPage(await this.build(e, 1));
			}
			refreshPage(e) {
				if (e) {
					const t = e.find("div.contentpane").eq(1),
						a = this.$page.find("div.overlay-container");
					a.prev().remove(),
						a.remove(),
						xe.update(e),
						this.$contentPane.html(t.html()),
						this.displayAutoBuildButtons(),
						this.displayCancelButtons(),
						this.displayBuildOptions(),
						Ae.reloadKaTimers(this.$page);
				}
				this.refreshAfterTimeout();
			}
			display() {
				setInterval(() => {
					this.checkAutoBuild();
				}, this.autoBuildCheckTime),
					this.displayAutoBuildButtons(),
					this.displayCancelButtons(),
					this.displayBuildOptions(),
					Ae.reloadKaTimers(this.$page),
					this.refreshAfterTimeout();
			}
		}
		class Lt {
			constructor(e) {
				(this.$page = e),
					(this.$resourcesTable = this.$page
						.find("table.borderlist")
						.eq(2));
			}
			display() {
				let e = 0,
					t = 0,
					a = 0;
				this.$resourcesTable
					.find("tr > td")
					.parent()
					.each((i, n) => {
						const s = o(n);
						(e += W.toNumber(s.children().eq(3).text())),
							(t += W.toNumber(s.children().eq(4).text())),
							(a += W.toNumber(s.children().eq(5).text()));
					}),
					this.$resourcesTable
						.find("th")
						.last()
						.attr("colspan", 2)
						.after(
							o(
								`<th class="kcs_small_text2">${W.numberToPrettyString(
									e
								)}</th>`
							),
							o(
								`<th class="kcs_small_text2">${W.numberToPrettyString(
									t
								)}</th>`
							),
							o(
								`<th class="kcs_small_text2">${W.numberToPrettyString(
									a
								)}</th>`
							),
							o("<th colspan=2></th>")
						);
			}
		}
		class Gt {
			constructor(e) {
				(this.$page = e),
					(this.$form = this.$page.find("form").eq(0)),
					(this.$submitBtn = this.$page
						.find('input[type="submit"]')
						.eq(0));
			}
			displayMultiSendOptions() {
				this.$submitBtn.after(
					o("<span> </span>").prepend(" ", E.$arrow()),
					Q.$spawnMultiSendRange(
						ft.multiSendOptions,
						{
							url: this.$form.attr("action"),
							method: "POST",
							data: this.$form.serialize(),
						},
						Ve()
					)
				);
			}
			display() {
				this.displayMultiSendOptions();
			}
		}
		class Ht {
			constructor(e) {
				(this.$page = e),
					(this.$maxDuration = this.$page.find("#max_duration")),
					(this.$forFriends = this.$page.find("#forFriends")),
					(this.$forAlliance = this.$page.find("#forAlliance")),
					(this.$forOthers = this.$page.find("#forOthers")),
					(this.keys = {
						maxDuration: "maxDuration",
						forFriends: "forFriends",
						forAlliance: "forAlliance",
						forOthers: "forOthers",
					});
			}
			saveOptions() {
				const e = {};
				(e[this.keys.maxDuration] = this.$maxDuration.val()),
					(e[this.keys.forFriends] =
						this.$forFriends.prop("checked")),
					(e[this.keys.forAlliance] =
						this.$forAlliance.prop("checked")),
					(e[this.keys.forOthers] = this.$forOthers.prop("checked")),
					F.setItem(F.keys.ownMarketOffers, e);
			}
			display() {
				const e = o(this.$maxDuration)
						.add(this.$forFriends)
						.add(this.$forAlliance)
						.add(this.$forOthers),
					t = F.getItem(F.keys.ownMarketOffers);
				t &&
					(this.$maxDuration.val(t[this.keys.maxDuration]),
					this.$forFriends.prop("checked", t[this.keys.forFriends]),
					this.$forAlliance.prop("checked", t[this.keys.forAlliance]),
					this.$forOthers.prop("checked", t[this.keys.forOthers])),
					e.on("change input", () => this.saveOptions());
			}
		}
		class Xt {
			constructor(e) {
				(this.$page = e),
					(this.$resourceTable = this.$page
						.find("table.borderlist")
						.eq(3)),
					(this.$resourceInputs = this.$resourceTable.find("input")),
					(this.$resourceMaxes =
						this.$resourceInputs.siblings("span")),
					(this.$sendCoords = this.$page.find("#send_x, #send_y")),
					(this.$sendX = this.$sendCoords.eq(0)),
					(this.$sendY = this.$sendCoords.eq(1)),
					(this.$form = this.$page.find("form").eq(0)),
					(this.availableDonkeys = W.toNumber(
						this.$page
							.find("table.borderlist")
							.eq(2)
							.find("td")
							.eq(0)
							.text()
					));
			}
			countResourcesInInputs() {
				let e = 0;
				return (
					this.$resourceInputs.each((t, a) => {
						e += W.toNumber(a.value);
					}),
					e < 1 && (e = 0),
					e
				);
			}
			countFittingResourceRatio(e) {
				const t = Object.values(e);
				let a = Math.min(...t.map((e, t) => xe.resources[t] / e));
				a > 1 && (a = 1);
				let i = t.map((e) => Math.floor(e * a));
				const n = i.reduce((e, t) => e + t, 0),
					s = (1e3 * this.availableDonkeys) / n;
				return s < 1 && (i = i.map((e) => Math.floor(e * s))), i;
			}
			displayCoordsCleanup() {
				this.$sendCoords.focusin(() => {
					this.$sendCoords.each((e, t) => {
						const a = o(t);
						"0" === a.val() && a.val("");
					});
				}),
					this.$sendCoords.focusout(() => {
						this.$sendCoords.each((e, t) => {
							const a = o(t);
							"" === a.val() && a.val("0");
						});
					});
			}
			displayResourceCleanup() {
				this.$resourceInputs.focusin((e) => {
					const t = o(e.currentTarget);
					"0" === t.val() && t.val("");
				}),
					this.$resourceInputs.focusout((e) => {
						const t = o(e.currentTarget);
						"" === t.val() && t.val("0");
					});
			}
			displayQuickAmounts(e, t) {
				const a = o(
					'<div class="kcs_market_quick_amount_container"></div>'
				);
				this.$resourceTable.after(a, "<br>"),
					Object.keys(ft.marketQuickAmounts).forEach((i) => {
						const n = ft.marketQuickAmounts[i],
							s = o(
								`<span class="click" style="vertical-align: sub;"> ${n.description} <img src="${n.img}"></span>`
							).prepend(E.$arrow()),
							r = o(
								'<div class="kcs_market_quick_amount"></div>'
							);
						r.append(s),
							a.append(r),
							s.click(() => {
								const a = this.countFittingResourceRatio(
									n.resources
								);
								this.$resourceInputs.each((e, t) => {
									o(t).val(a[e]);
								}),
									this.refreshCount(e, t);
							});
					});
			}
			refreshCount(e, t) {
				const a = this.countResourcesInInputs();
				e.text(a),
					a < 1
						? t.hide()
						: (t.show(),
						  a <= 1e3 * this.availableDonkeys
								? e.css("color", "#000000")
								: e.css("color", "#ff0000"));
			}
			displayResourceCount(e, t) {
				this.$resourceTable.find("th").eq(0).append(t),
					this.refreshCount(e, t),
					this.$resourceMaxes.click(() => this.refreshCount(e, t)),
					this.$resourceInputs.on("change keyup paste", () =>
						this.refreshCount(e, t)
					);
			}
			displayLastTarget() {
				if (this.$sendX.val() < 1 || this.$sendY.val() < 1) {
					const e = F.getItem(F.keys.lastMarketCoords);
					if (e) {
						const t = W.coordsToCoordList(e);
						this.$sendX.val(t[0]), this.$sendY.val(t[1]);
					}
				}
				this.$form.on("submit", () =>
					F.setItem(
						F.keys.lastMarketCoords,
						`${this.$sendX.val()}|${this.$sendY.val()}`
					)
				);
			}
			displayTooMuchWarn() {
				const e = {
					send_res1: xe.wood,
					send_res2: xe.stone,
					send_res3: xe.iron,
				};
				this.$resourceInputs.on("change keyup paste", (t) => {
					const a = o(t.currentTarget),
						i = 1e3 * this.availableDonkeys,
						n = Math.min(i, e[a.attr("name")]);
					a.val() > n
						? a.css("background-color", "red")
						: a.css("background-color", "");
				});
			}
			display() {
				const e = o("<span></span>"),
					t = o(
						'<span style="font-weight: normal; display: none;"></span>'
					)
						.append(" (")
						.append(e)
						.append(")");
				this.displayCoordsCleanup(),
					this.displayQuickAmounts(e, t),
					this.displayResourceCount(e, t),
					this.displayResourceCleanup(),
					this.displayTooMuchWarn(),
					this.displayLastTarget();
			}
		}
		class ea {
			constructor(e) {
				(this.$page = e),
					(this.autoRecruitmentQueue =
						F.getComplexItem(F.keys.barracksAutoRecruit, xe.id) ||
						{}),
					(this.$form = e.find("form").eq(0)),
					(this.autoRecruitCheckTime = 1e4),
					(this.refreshTimeout = null);
			}
			get underRecruitmentCount() {
				return this.$page
					.find(".contentpane")
					.eq(1)
					.find('a[href*="cancelRecruit"]').length;
			}
			async checkAutoRecruitment() {
				if (
					!(this.underRecruitmentCount > 0) &&
					this.autoRecruitmentQueue[re.type.snob.name]
				) {
					if (this.$form.find("span.click").eq(1).length)
						try {
							const e = await Q.ajax({
								url: this.$form.attr("action"),
								method: "POST",
								data: `${re.type.snob.name}=1`,
							});
							this.refreshPage(o(e));
						} catch (e) {
							Q.log("Could not refresh site :("),
								this.refreshAfterTimeout();
						}
				}
			}
			refreshAfterTimeout() {
				clearTimeout(this.refreshTimeout),
					(this.refreshTimeout = setTimeout(async () => {
						clearTimeout(this.refreshTimeout);
						try {
							const e = await Q.ajax({ url: Pe() });
							this.refreshPage(o(e));
						} catch (e) {
							Q.log("Could not refresh site :("),
								this.refreshAfterTimeout();
						}
					}, 18e4));
			}
			refreshPage(e) {
				e &&
					(xe.update(e),
					this.$page
						.find(".contentpane")
						.eq(1)
						.replaceWith(e.find(".contentpane").eq(1)),
					this.displayAutoRecruitmentButton(),
					Ae.reloadKaTimers(this.$page)),
					this.refreshAfterTimeout();
			}
			displayAutoRecruitmentButton() {
				const e = this.$page.find('a[href$="unit=snob"]'),
					t = this.autoRecruitmentQueue[re.type.snob.name]
						? E.$dotGreen()
						: E.$dotRed();
				t.click(() => {
					this.autoRecruitmentQueue[re.type.snob.name]
						? delete this.autoRecruitmentQueue[re.type.snob.name]
						: (this.autoRecruitmentQueue[re.type.snob.name] = !0),
						t.attr(
							"src",
							(this.autoRecruitmentQueue[re.type.snob.name]
								? E.$dotGreen()
								: E.$dotRed()
							).attr("src")
						),
						F.setComplexItem(
							F.keys.barracksAutoRecruit,
							xe.id,
							this.autoRecruitmentQueue
						);
				}),
					e.before(t, " ");
			}
			display() {
				setInterval(() => {
					this.checkAutoRecruitment();
				}, this.autoRecruitCheckTime),
					this.displayAutoRecruitmentButton(),
					this.refreshAfterTimeout();
			}
		}
		class ta {
			constructor(e) {
				this.$page = e;
			}
			isResearchable(e) {
				return (
					this.$page.find(`a[href^="game"][href*="unit=${e}"]`)
						.length > 0
				);
			}
			async research(e) {
				if (this.isResearchable(e))
					try {
						const t = await Q.ajax({
							url: this.$page
								.find(`a[href^="game"][href*="unit=${e}"]`)
								.eq(0)
								.attr("href"),
						});
						return o(t);
					} catch (e) {
						return null;
					}
				return this.$page;
			}
			async researchMissing() {
				const e = [];
				return (
					this.$page
						.find('a[href^="game"][href*="unit="]')
						.each((t, a) => {
							const i = o(a);
							e.push(Q.ajax({ url: i.attr("href") }));
						}),
					Promise.all([...e])
				);
			}
		}
		class aa {
			constructor(e) {
				(this.$page = e),
					(this.$playerTable = this.$page
						.find("table.borderlist")
						.eq(2)),
					(this.$settlementTable = this.$page
						.find("table.borderlist")
						.eq(3));
				const t = this.$page.find("h1").eq(1).text();
				(this.playerName = t
					.substring(t.indexOf(" ") + 1)
					.replace(/\(.*\)/, "")
					.trim()),
					(this.settlementCount = W.toNumber(
						this.$playerTable
							.find("tr")
							.eq(4)
							.find("td")
							.last()
							.text()
					)),
					(this.bonusScore = 2250 * (this.settlementCount - 1)),
					(this.totalScore = W.toNumber(
						this.$playerTable
							.find("tr")
							.eq(2)
							.find("td")
							.last()
							.text()
					)),
					(this.maxArmyScore = 1e4 * this.settlementCount);
				const a = this.$playerTable
					.find("tr")
					.eq(1)
					.find("td")
					.last()
					.find("a")
					.eq(0);
				this.ally = {
					id: W.toNumber(W.queryString(a.attr("href")).get("id")),
					tag: a.text(),
				};
			}
			get settlements() {
				const e = [];
				if (this.settlementCount < 1) return e;
				let t = this.$settlementTable.find("tr");
				return (
					(t = t.slice(1)),
					t.each((t, a) => {
						const i = o(a).children(),
							n = i.eq(0).find("a").eq(0).attr("href");
						e.push({
							infoLink: n,
							id: W.queryString(n).get("id"),
							name: i.eq(0).find("a").eq(0).attr("title"),
							mapLink: i.eq(1).find("a").eq(0).attr("href"),
							coords: W.coordsToCoordList(i.eq(1).text()),
							score: W.toNumber(i.eq(2).text()),
						});
					}),
					e
				);
			}
			get overallSettlementScore() {
				if (this.settlementCount < 1) return 0;
				let e = 0;
				return (
					this.$settlementTable
						.find("tr > td:nth-child(3)")
						.each((t, a) => {
							e += W.toNumber(o(a).text());
						}),
					e + this.bonusScore
				);
			}
			get armyScore() {
				return this.totalScore - this.overallSettlementScore;
			}
			displayCopyCoords() {
				this.$settlementTable.find("tr").each((e, t) => {
					const a = o(t).find("td").eq(1);
					a.append(E.$chains(a.text()));
				});
			}
			displayArmyScore() {
				this.$playerTable
					.find("tr")
					.last()
					.after(
						o("<tr></tr>")
							.append(`<td>${U.armyScore}:</td>`)
							.append(
								`<td>${W.numberToPrettyString(
									this.armyScore
								)} (${W.numberToPrettyPercentage(
									this.armyScore / this.maxArmyScore
								)})</td>`
							)
					);
			}
			display() {
				this.displayCopyCoords(), this.displayArmyScore();
			}
		}
		class ia {
			constructor(e) {
				(this.$page = e),
					(this.$infoTable = this.$page
						.find("table.borderlist")
						.eq(2)),
					(this.playerId = null);
				const t = this.$infoTable
					.find('a[href*="info_player"]')
					.eq(0)
					.attr("href");
				t && (this.playerId = W.toNumber(W.queryString(t).get("id"))),
					(this.coordsRaw = this.$infoTable
						.find("tr")
						.eq(1)
						.find("td")
						.eq(1)
						.text()),
					(this.coords = W.coordsToCoordList(this.coordsRaw)),
					(this.points = W.toNumber(
						this.$infoTable
							.find("tr")
							.eq(2)
							.find("td")
							.eq("1")
							.text()
					));
			}
			displayCopyCoords() {
				this.$infoTable
					.find("tr")
					.eq(1)
					.find("td")
					.eq(1)
					.append(E.$chains(`${this.coords[0]}|${this.coords[1]}`));
			}
			displayOwnSettlementOptions(e) {
				const t = Math.round(0.95 * xe.storage),
					a = o("<div></div>"),
					i = o(`<a href="${De(e)}"> ${U.goToBarracks}</a>`).prepend(
						E.$arrow()
					),
					n = o(`<a href="${Ye(e)}"> ${U.goToCastle}</a>`).prepend(
						E.$arrow()
					);
				a.append(i, "<br>", n),
					Object.values(ft.marketSendBack).forEach((i) => {
						const n = Math.min(t, i),
							s = o(
								`<a href="${Ve(e)}&m=send&inta=send&send_x=${
									xe.coords[0]
								}&send_y=${xe.coords[1]}` +
									`&send_res1=${Math.max(n - xe.wood, 0)}` +
									`&send_res2=${Math.max(n - xe.stone, 0)}` +
									`&send_res3=${Math.max(n - xe.iron, 0)}">` +
									` ${U.sendBackResources} ${Math.floor(
										i / 1e3
									)}k` +
									"</a>"
							).prepend(E.$arrow());
						a.append("<br>", s);
					});
				const s = o(
					`<a href="${Ve(e)}&m=send&inta=send&send_x=${
						xe.coords[0]
					}&send_y=${xe.coords[1]}` +
						`&send_res1=50000&send_res2=50000&send_res3=50000"> ${U.sendFixedResources}</a><br>`
				).prepend(E.$arrow());
				a.append("<br>", s),
					a.append(
						o(
							`<a href="${Qe()}&target_x=${
								this.coords[0]
							}&target_y=${this.coords[1]}"> ` +
								`${U.addToAttackPlanner}</a><br>`
						).prepend(E.$arrow())
					),
					this.$page
						.find("div.contentpane")
						.eq(1)
						.children("a")
						.last()
						.after("<br>", a);
			}
			async displayEnemySettlementOptions() {
				const e = o(
						'<div style="float: right; width: 410px; display: inline-block; padding-left: 5px; vertical-align: top;"></div>'
					),
					[t, a] = await Zt.attackWithRaxLvl(
						xe.id,
						this.coords,
						xe.units
					);
				if (t) {
					let i = !1;
					Object.values(ft.quickSendUnits).forEach(async (n) => {
						if (
							!Object.keys(n.units).every(
								(e) => xe.units[e] > n.units[e]
							)
						)
							return;
						i = !0;
						const s = [
								re.type.farmer.name,
								re.type.sword.name,
								re.type.spear.name,
								re.type.axe.name,
								re.type.bow.name,
								re.type.spy.name,
								re.type.light.name,
								re.type.heavy.name,
							],
							r = Object.keys(n.units).reduce((e, t) => {
								let i;
								return (
									(i =
										s.includes(t) && n.raxMulti
											? n.units[t] * a
											: n.units[t]),
									`${e}&${t}=${i}`
								);
							}, ""),
							l = `send_x=${this.coords[0]}&send_y=${this.coords[1]}&${n.action}=1${r}`,
							c = Object.keys(n.units)
								.map((e) => {
									let t;
									return (
										(t =
											s.includes(e) && n.raxMulti
												? n.units[e] * a
												: n.units[e]),
										` ${t}<img src="${re.type[e].image}" class="kcs_quicksend_troops">`
									);
								})
								.join(","),
							d = Q.$spawnMultiSendRange(
								ft.multiSendOptions,
								{ url: Me(xe.id, t), method: "POST", data: l },
								De()
							),
							p = re.action[n.action].$image(
								"kcs_quicksend_troops"
							),
							u = await re.calculateTravelTimeInSeconds(
								xe.coords,
								this.coords,
								Object.keys(n.units)
							),
							m = Ae.$timeUp(u, "kcs_small_text"),
							h = o('<span class="click"></span>')
								.append(p)
								.append(`:${c}`)
								.append("[", m, "]");
						h.one("click", async () => {
							h.after(E.$spinner("13px")),
								await Q.ajax({
									url: Me(xe.id, t),
									method: "POST",
									data: l,
								}),
								(window.location.href = De());
						});
						const g = o(
							'<span class="kcs_quicksend_troops"></span>'
						);
						g.append(E.$arrow(), " ", d, h, "<br>"), e.append(g);
					}),
						i || e.append(U.noValidUnitsToSend);
				} else e.append(U.noUnitsToSend);
				this.$infoTable.after(e);
			}
			display() {
				this.displayCopyCoords();
				const e = W.toNumber(W.query.get("id"));
				this.playerId === Te && e !== xe.id
					? this.displayOwnSettlementOptions(e)
					: this.displayEnemySettlementOptions();
			}
		}
		const na = (() => {
				const e = {
					resources: {
						"9c02f49834396c15eff28de390f3ecb78fd7d74a": 5,
						"04de47a06ec68863ab211ff31f22eff8614bc481": 20,
						b91895b6b5868f9f0fc817c7c2ebcf47b2eaf2bb: 60,
						"9919249d7919bd1df2b06bd519a1f96f64e3720e": 5,
						bb3c710bd0e770ac672a72cb04ce154219ef3914: 20,
						"65d39399b57ed36b87aaa27153e3584ab01ffc5a": 60,
						"2109aa1a7e36e9c7cf2091e8ecd95d534e139733": 5,
						"230f2991aa90722e27c5f19daec32156c2352d2b": 20,
						"49ead95f6ec2b025ba05616a6042683bcd3068f6": 60,
						"4e81bcdeba3ffb9ef12d3f247900e209a3faa8e2": 8,
						"222fdf7820c4ddc86204ead58d4f2fb972f4ee90": 32,
						"4b4d4cf65cd7f1d1455ca7329f74b1fa8c089438": 96,
					},
					plans: {
						c26d35ba33ccb8880b43169782f34bdecdb602af: 100,
						b64dc329e9b1f05b3ca0f3332fb32113aa8f3383: 80,
						"28d126fe69f044efac724a2fab53c05ae683b786": 60,
						"1ceee9d4d34b9e40a951c58263019c7dfdea49d8": 20,
					},
					treaties: { f5e375ddf74cc81609ce73b52f2a53d8641f8208: 100 },
					relocations: {
						"42da4b46cd6ed6d6f7e8473a763ac81182c3e5ff": 30,
						"526a611dfaa3a9e84ea39f272c5a1898302d3b8b": 220,
					},
					always: {
						e67a3474e045a7d59f4ce8bb14f35731118e2fde: 10,
						"128f5056822ce6e5229706aabf0ec5bf682c76b2": 20,
						c790a9650d217e40bad25b857cc72432d13e8be4: 50,
						fee23bae26c7af6aeac79ae4eaa420f1bba420b6: 100,
						"195226f8934407c7a9529d30a0e66a61788a5ab7": 26,
						c6d0923ae8a4798b0a80c4bf1a3c314e88ab542a: 110,
						ed232ed11c10cae49ab4253eef0d267540307eaf: 15,
					},
				};
				return (t) => {
					let a = null;
					t
						? (a = t)
						: ((a = Object.keys(
								F.getItem(F.keys.wheelStrategy) || {}
						  )),
						  a.push("always"));
					const i = {};
					a.forEach((t) => {
						Object.keys(e).includes(t) && Object.assign(i, e[t]);
					});
					const n = (e) => i[e] || 0;
					return {
						wheelValue: (e) => {
							let t = 0;
							for (const a of e) t += n(a.item);
							return t;
						},
						wheelThreshold: () => {
							let e = 0;
							if (a.includes("always")) {
								const t = 20;
								e = Math.max(e, t);
							}
							if (a.includes("resources")) {
								const t = 170;
								e = Math.max(e, t);
							}
							if (a.includes("plans")) {
								const t = 80;
								e = Math.max(e, t);
							}
							if (a.includes("treaties")) {
								const t = 100;
								e = Math.max(e, t);
							}
							if (a.includes("relocations")) {
								const t = 60;
								e = Math.max(e, t);
							}
							return e;
						},
						itemValue: n,
					};
				};
			})(),
			sa = {
				inventory: {
					crowns10: "84ddc9fecfa6a01c191ca8bbfac3736a3f936bc8",
					crowns20: "087f9d164e268f3ee47c15765f139ac09bd2a9ca",
					crowns50: "ba2cc9794093651c4c5a602305704434371fd39a",
					crowns100: "2828af59c4fddc9ff3d375f86c5742fae8eeee60",
					stone: "a5eb750fb673d724a169a2b4ecb53f8c808c5c6e",
					dice10: "f15542ec9593005ffbddb29dad5a09d6fd8cfccd",
					dice3: "04baf9e05ce1e07e926228715bb46634ce896660",
					dice: "9d19429b02e4a86290654ad7cf7cfe23973903ff",
				},
				prize: {
					e67a3474e045a7d59f4ce8bb14f35731118e2fde:
						"84ddc9fecfa6a01c191ca8bbfac3736a3f936bc8",
					"128f5056822ce6e5229706aabf0ec5bf682c76b2":
						"087f9d164e268f3ee47c15765f139ac09bd2a9ca",
					c790a9650d217e40bad25b857cc72432d13e8be4:
						"ba2cc9794093651c4c5a602305704434371fd39a",
					fee23bae26c7af6aeac79ae4eaa420f1bba420b6:
						"2828af59c4fddc9ff3d375f86c5742fae8eeee60",
				},
			},
			ra = (() => {
				const e = async () => {
						let e = null;
						try {
							e = await Q.ajax({
								dataType: "xml",
								type: "get",
								data: { act: "load" },
								url: ct(),
								cache: !1,
							});
						} catch (e) {
							return null;
						}
						const t = o(e),
							a = t.find("data").attr("status"),
							i = W.toNumber(t.find("wheel").attr("id")),
							n = t.find(
								`stock > item[uuid="${sa.inventory.stone}"]`
							),
							s = t.find(
								`stock > item[uuid="${sa.inventory.dice}"]`
							),
							r = [];
						t.find("wheel > plate").each((e, t) => {
							const a = o(t),
								i = a.find("item").attr("plate"),
								n = a.find("img").attr("src"),
								s = a.find("loca").text();
							r.push({ rarity: i, item: n, text: s });
						});
						let l = null,
							c = null;
						"PAYOUT" === a
							? ((l = W.toNumber(
									t.find("data").attr("endPosition")
							  )),
							  (c = r[l]),
							  ([c.date, c.time] = Ae.serverDate()
									.toLocaleString("pl-PL")
									.split(", ")))
							: "SPINNING" === a &&
							  (l = W.toNumber(
									t.find("data").attr("startPosition")
							  ));
						let d = null;
						return (
							"SPINNING" === a &&
								(d = W.toNumber(
									t.find("data").attr("maxRuntime")
								)),
							{
								info: {
									status: a,
									position: l,
									runtime: d,
									id: i,
								},
								stock: {
									stone: {
										local: W.toNumber(n.attr("localStock")),
										global: W.toNumber(
											n.attr("globalStock")
										),
									},
									dice: {
										local: W.toNumber(s.attr("localStock")),
										global: W.toNumber(
											s.attr("globalStock")
										),
									},
								},
								plates: r,
								prize: c,
							}
						);
					},
					t = async () => {
						let e = null;
						try {
							e = await Q.ajax({
								dataType: "xml",
								type: "get",
								data: { act: "payout" },
								url: ct(),
								cache: !1,
							});
						} catch (e) {
							return null;
						}
						let t = null;
						const a = o(e);
						if (a.find("wheel").length) {
							const e = a.find("history").find("prize").eq(0);
							t = {
								text: e.text(),
								item: e.attr("image"),
								rarity: e.attr("rarity"),
								time: e.attr("time"),
								date: e.attr("date"),
							};
						}
						return t;
					},
					a = async (i) => {
						let n = null;
						try {
							n = await Q.ajax({
								dataType: "xml",
								type: "get",
								data: { act: "start", id: i.info.id },
								url: ct(),
								cache: !1,
							});
						} catch (e) {
							return null;
						}
						const s = o(n);
						let r = null;
						return (
							s.find("data").length
								? (r = {
										position: s
											.find("data")
											.attr("startPosition"),
										runtime: W.toNumber(
											s.find("data").attr("maxRuntime")
										),
								  })
								: (await e(), await t(), (r = await a())),
							r
						);
					};
				return {
					load: e,
					payout: t,
					spin: a,
					reset: async () => (
						await Q.ajax({
							dataType: "xml",
							type: "get",
							data: { act: "generate" },
							url: ct(),
							cache: !1,
						}),
						e()
					),
				};
			})(),
			oa = {
				inventory: async () => {
					let e = null;
					try {
						e = await Q.ajax({ url: Ge() });
					} catch (e) {
						return {
							[sa.inventory.crowns10]: 0,
							[sa.inventory.crowns20]: 0,
							[sa.inventory.crowns50]: 0,
							[sa.inventory.crowns100]: 0,
						};
					}
					const t = o(e).find("script").eq(0).text(),
						a = t.match(
							new RegExp(
								`stock\\['${sa.inventory.crowns10}'\\](.|\\n)*?}`
							)
						),
						i = t.match(
							new RegExp(
								`stock\\['${sa.inventory.crowns20}'\\](.|\\n)*?}`
							)
						),
						n = t.match(
							new RegExp(
								`stock\\['${sa.inventory.crowns50}'\\](.|\\n)*?}`
							)
						),
						s = t.match(
							new RegExp(
								`stock\\['${sa.inventory.crowns100}'\\](.|\\n)*?}`
							)
						);
					return {
						[sa.inventory.crowns10]: a
							? W.toNumber(a[0].match(/local\s*:\s*(\d+)/)[1])
							: 0,
						[sa.inventory.crowns20]: i
							? W.toNumber(i[0].match(/local\s*:\s*(\d+)/)[1])
							: 0,
						[sa.inventory.crowns50]: n
							? W.toNumber(n[0].match(/local\s*:\s*(\d+)/)[1])
							: 0,
						[sa.inventory.crowns100]: s
							? W.toNumber(s[0].match(/local\s*:\s*(\d+)/)[1])
							: 0,
					};
				},
				crowns: async () => {
					let e = null;
					try {
						e = await Q.ajax({ url: Ge() });
					} catch (e) {
						return 0;
					}
					const t = o(e)
						.find("script")
						.eq(0)
						.text()
						.match(/'freeCurrencyLocal' : (\d+)/)[1];
					return W.toNumber(t);
				},
			},
			la = (() => {
				const e = async (e) => {
						let t = null;
						try {
							return (
								(t = await Q.ajax({
									type: "get",
									url: `${He()}&a=buyRelic&aj=1&uuid=${e}`,
								})),
								t.bought
							);
						} catch (e) {
							return !1;
						}
					},
					t = async (e) => {
						try {
							return (
								await Q.ajax({
									type: "get",
									url: `${Ge()}&a=activateRelic&aj=1&uuid=${e}`,
								}),
								!0
							);
						} catch (e) {
							return !1;
						}
					};
				return {
					activatePrize: async (e) => t(sa.prize[e]),
					activate: t,
					buy: async (t) => {
						const a = await e(t);
						return !1 === a ? e(t) : a;
					},
				};
			})();
		function ca(e) {
			return `${((W.toNumber(e) % 20) + 1).toString().padStart(2, "0")}`;
		}
		const da = {
			0: "01",
			1: "02",
			2: "03",
			3: "04",
			4: "05",
			5: "06",
			6: "07",
			7: "08",
			8: "09",
			9: "10",
			10: "20",
			11: "19",
			12: "18",
			13: "17",
			14: "16",
			15: "15",
			16: "14",
			17: "13",
			18: "12",
			19: "11",
		};
		async function pa(e, t) {
			let a = e;
			if ("NEW" === a.info.status) {
				let e = 0;
				for (;;) {
					const i = na();
					if (i.wheelValue(a.plates) >= i.wheelThreshold()) break;
					if (!(a.stock.dice.local + a.stock.dice.global > 0)) break;
					if (((a = await t()), (e += 1), e >= 10)) break;
				}
			}
			return a;
		}
		async function ua(e, t) {
			let a = e;
			if ("NEW" === a.info.status) {
				let e = 0;
				for (;;) {
					const i = na(["always"]);
					if (i.wheelValue(a.plates) >= i.wheelThreshold()) break;
					if (!(a.stock.dice.local + a.stock.dice.global > 0)) break;
					if (((a = await t()), (e += 1), e >= 10)) break;
				}
			}
			return a;
		}
		async function ma(e) {
			const t = F.getComplexItem(F.keys.wheelOptions, "dices");
			if (e.stock.dice.global < t) {
				const a = Math.ceil((t - e.stock.dice.global) / 10),
					i = await oa.crowns(),
					n = Math.floor(i / 20);
				let s = Math.min(a, n);
				for (; s > 0; ) await la.buy(sa.inventory.dice10), (s -= 1);
			}
		}
		async function ha() {
			const e = await oa.inventory();
			for (const [t, a] of Object.entries(e))
				a > 0 && (await la.activate(t));
		}
		class ga {
			constructor(e) {
				(this.$page = e),
					(this.$useStone = null),
					(this.$useDice = null),
					(this.$stoneCount = null),
					(this.$diceCount = null),
					(this.$autoStone = null),
					(this.$autoStoneCounter = null),
					(this.$maxSpins = null),
					(this.autoToggle = !1),
					(this.$wheel = e.find("#wheelOfFortune").eq(0)),
					(this.$wheelAnim = this.$wheel
						.find(".wof-animation")
						.eq(0)),
					(this.$commonPlate = this.$page
						.find("#wheelOfFortune-common")
						.eq(0)),
					(this.$uncommonPlate = this.$page
						.find("#wheelOfFortune-uncommon")
						.eq(0)),
					(this.$rarePlate = this.$page
						.find("#wheelOfFortune-rare")
						.eq(0)),
					(this.$wheelPlates = this.$wheel.find("ul").eq(0)),
					(this.continueSpinning = !0);
			}
			displayInfoBox() {
				const e = this.$page.find("#wheelOfFortuneBoxes"),
					t = o(
						'<div class="wof-box-inner wof-boxes" style="text-align: center; width: 250px; height: 123px; margin: auto;"></div>'
					),
					a = o(
						'<div style="position: absolute; bottom: -22px; right: -15px;" class="click"></div>'
					).prepend(E.$description("kcs_grayscale_hoverable"));
				a.on("click", async () => {
					ce.textBox(
						U.descriptions.wheelText,
						U.descriptions.wheelTitle
					);
				}),
					t.append(a),
					(this.$autoStone = o(
						`<div class="awesome-button action" style="margin-bottom: 5px;">${U.wheelAutoSpin}</div>`
					)),
					(this.$autoStoneCounter = o(
						'<span class="kcs_small_text2"></span>'
					)),
					this.$autoStone.append(this.$autoStoneCounter);
				const i = o(
						'<div style="margin-top: -2px; font-size: 75%;"></div>'
					),
					n = o('<input type="checkbox" checked disabled>'),
					s = o('<input type="checkbox">');
				s.prop(
					"checked",
					F.getComplexItem(F.keys.wheelStrategy, "resources")
				);
				const r = o('<input type="checkbox">');
				r.prop(
					"checked",
					F.getComplexItem(F.keys.wheelStrategy, "treaties")
				);
				const l = o('<input type="checkbox">');
				l.prop(
					"checked",
					F.getComplexItem(F.keys.wheelStrategy, "plans")
				);
				const c = o('<input type="checkbox">');
				c.prop(
					"checked",
					F.getComplexItem(F.keys.wheelStrategy, "relocations")
				),
					i.append(
						o(
							`<div style="display: inline-block;">${U.wheelStratCrowns}</div>`
						).append(n),
						"&nbsp;&nbsp;&nbsp;",
						o(
							`<div style="display: inline-block;">${U.wheelStratResources}</div>`
						).append(s),
						"&nbsp;&nbsp;",
						o(
							`<div style="display: inline-block;">${U.wheelStratTreaties}</div>`
						).append(r),
						"&nbsp;&nbsp;",
						o(
							`<div style="display: inline-block;">${U.wheelStratPlans}</div>`
						).append(l),
						"&nbsp;&nbsp;",
						o(
							`<div style="display: inline-block;">${U.wheelStratRelocations}</div>`
						).append(c)
					);
				const d = F.getComplexItem(F.keys.wheelOptions, "dices"),
					p = o(
						`<input type="number" max="999" min="0" class="kcs_building_level" style="font-size: 12px; width: 42px;" value="${d}">`
					),
					u = o(
						'<input type="checkbox" style="vertical-align: bottom;">'
					);
				u.prop(
					"checked",
					F.getComplexItem(F.keys.wheelOptions, "local")
				);
				const m = o('<div style="font-size: 75%;"></div>');
				(this.$maxSpins = o(
					'<input type="number" max="100" class="kcs_building_level" style="font-size: 12px; width: 42px;" value="10">'
				)),
					m.append(
						o(
							`<div style="margin-top: 1px;">${U.maxSpins}</div>`
						).append(this.$maxSpins),
						o(
							`<div style="margin-top: 1px;">${U.wheelStratDices}</div>`
						).append(p),
						o(
							`<div style="margin-top: 2px;">${U.useOnlyLocal}</div>`
						).append(u)
					),
					t.append(this.$autoStone, i, m),
					e.append(t),
					s.on("change", () => {
						F.setComplexItem(
							F.keys.wheelStrategy,
							"resources",
							s.prop("checked")
						),
							this.displayWheelPrizesValues();
					}),
					r.on("change", () => {
						F.setComplexItem(
							F.keys.wheelStrategy,
							"treaties",
							r.prop("checked")
						),
							this.displayWheelPrizesValues();
					}),
					l.on("change", () => {
						F.setComplexItem(
							F.keys.wheelStrategy,
							"plans",
							l.prop("checked")
						),
							this.displayWheelPrizesValues();
					}),
					c.on("change", () => {
						F.setComplexItem(
							F.keys.wheelStrategy,
							"relocations",
							c.prop("checked")
						),
							this.displayWheelPrizesValues();
					}),
					p.on("change", () => {
						F.setComplexItem(F.keys.wheelOptions, "dices", p.val()),
							this.displayWheelPrizesValues();
					}),
					this.$autoStone.on("click", async () => {
						this.$autoStone.hasClass("disabled") ||
							(this.autoToggle
								? (this.$autoStone.removeClass(
										"kcs_animated_gradient"
								  ),
								  (this.continueSpinning = !1))
								: ((this.continueSpinning = !0),
								  this.$autoStone.addClass(
										"kcs_animated_gradient"
								  ),
								  this.spinTillStopped()),
							(this.autoToggle = !this.autoToggle));
					}),
					u.on("change", () => {
						F.setComplexItem(
							F.keys.wheelOptions,
							"local",
							u.prop("checked")
						),
							this.handleDiceAndStoneAmount();
					});
			}
			async replaceWheelButtons() {
				const e = this.$page.find("#rotateButton"),
					t = this.$page.find("#resetButton");
				(this.$useStone = o(
					`<div class="awesome-button action">${e.text()}</div>`
				)),
					(this.$useDice = o(
						`<div class="awesome-button action">${t.text()}</div>`
					)),
					e.after(this.$useStone),
					t.after(this.$useDice),
					e.remove(),
					t.remove(),
					this.$useStone.on("click", async () => {
						this.$useStone.hasClass("disabled") ||
							(this.$useStone.addClass("disabled"),
							this.spinAndWaitForWheel());
					}),
					this.$useDice.on("click", async () => {
						this.$useDice.hasClass("disabled") || this.resetWheel();
					});
			}
			async replaceStoneDiceAmountDivs() {
				const e = this.$page
						.find(`div.wof-item-${sa.inventory.stone}`)
						.eq(0),
					t = this.$page
						.find(`div.wof-item-${sa.inventory.dice}`)
						.eq(0);
				(this.$stoneCount = e.clone()),
					(this.$diceCount = t.clone()),
					e.after(this.$stoneCount),
					t.after(this.$diceCount),
					e.hide(),
					t.hide();
			}
			handleDiceAndStoneAmount(e) {
				e &&
					(this.$diceCount.text(
						`${e.stock.dice.local}, ${e.stock.dice.global}`
					),
					this.$diceCount.attr("data-local", e.stock.dice.local),
					this.$diceCount.attr("data-global", e.stock.dice.global),
					this.$stoneCount.text(
						`${e.stock.stone.local}, ${e.stock.stone.global}`
					),
					this.$stoneCount.attr("data-local", e.stock.stone.local),
					this.$stoneCount.attr("data-global", e.stock.stone.global));
				const t = this.$stoneCount.attr("data-local"),
					a = this.$stoneCount.attr("data-global"),
					i = this.$diceCount.attr("data-local"),
					n = this.$diceCount.attr("data-global"),
					s = F.getComplexItem(F.keys.wheelOptions, "local");
				t + a < 1
					? this.$useStone.addClass("disabled")
					: this.$useStone.removeClass("disabled"),
					(s && t < 1) || (!s && t + a < 1)
						? this.$autoStone.addClass("disabled")
						: this.$autoStone.removeClass("disabled"),
					i + n < 1
						? this.$useDice.addClass("disabled")
						: this.$useDice.removeClass("disabled");
			}
			async displayWheelPrizesValues() {
				const e = na();
				this.$wheel.find(".kcs_wheel_value_box").remove();
				const t = [];
				this.$wheelPlates.find("li:not(.old)").each((a, i) => {
					const n = o(i),
						s = n.children().eq(0),
						r = n.attr("class"),
						l = r.substring(r.lastIndexOf("-") + 1),
						c = s.attr("src").match(/\/+([^-]*)-small/)[1],
						d = e.itemValue(c);
					d > 0 &&
						s.after(`<div class="kcs_wheel_value_box">${d}</div>`),
						t.push({ rarity: l, item: c, text: s.attr("title") });
				});
				const a = o(
					`<div class="kcs_wheel_value_box kcs_wheel_amount_box">\n        ${
						U.wheelAmount
					}${e.wheelValue(t)}<br>(${
						U.wheelAmountInfo
					}${e.wheelThreshold()})\n      </div>`
				);
				this.$wheelPlates.prepend(a);
			}
			executeWhenWheelIsFilled(e) {
				let t = null;
				t = setInterval(() => {
					this.$wheelPlates.find("img").length &&
						(e(), clearInterval(t));
				}, 50);
			}
			async handleWheelInit() {
				const e = await ra.load();
				if (
					(this.handleDiceAndStoneAmount(e),
					"PAYOUT" === e.info.status || "SPINNING" === e.info.status)
				) {
					let e = null;
					e = setInterval(() => {
						this.$wheelAnim
							.attr("class")
							.match(/^wof-animation$/) &&
							(clearInterval(e), this.displayWheelPrizesValues());
					}, 50);
				} else
					this.executeWhenWheelIsFilled(() => {
						this.displayWheelPrizesValues();
					});
			}
			displayWheelSpinningPositionHighlight(e) {
				this.$wheelAnim.attr(
					"class",
					`wof-animation wof-anim-${ca(e)}`
				);
			}
			displayWheelPrizePositionHighlight(e) {
				this.$wheelAnim.attr(
					"class",
					`wof-animation wof-anim-${ca(e)} kcs_wheel_anim`
				);
			}
			wheelSpinHighlight(e) {
				let t = e;
				const a = setInterval(() => {
					(t = (t % 20) + 1),
						this.displayWheelSpinningPositionHighlight(t);
				}, 40);
				return async (e) => {
					clearInterval(a);
					let i = null;
					return (
						(i = t >= e ? 20 - t + e : e - t),
						new Promise((e) => {
							const a = setInterval(
								() => (
									(t = (t % 20) + 1),
									1 === i
										? (clearInterval(a),
										  this.displayWheelPrizePositionHighlight(
												t
										  ),
										  e())
										: ((i -= 1),
										  this.displayWheelSpinningPositionHighlight(
												t
										  ),
										  null)
								),
								40
							);
						})
					);
				};
			}
			addPrizeToHistory(e) {
				const t = this.$page.find("#history").eq(0);
				let a = null;
				t.children().length > 0
					? (a = t.find("ul").eq(0))
					: ((a = o('<ul class="itemList"></ul>')),
					  t.append(
							o(
								'<div id="wof-history-container" class="text-toggle-element"></div>'
							).append(a)
					  ));
				const i = o(`<li class="rarity-${e.rarity}"></li>`)
					.append(`<img src="/item-images/${e.item}-small.png">`)
					.append(`<div class="title">${e.text}</div>`)
					.append(`<div class="price">${e.time}</div>`)
					.append(`<div class="inventory">${e.date}</div>`);
				a.prepend(i);
			}
			displayPrizeOnMainPlate(e) {
				let t = null;
				(t =
					"common" === e.rarity
						? this.$commonPlate
						: "uncommon" === e.rarity
						? this.$uncommonPlate
						: this.$rarePlate),
					t.css("display", "block"),
					t.css("margin-top", "-50px");
				const a = o(
					`<img src="/item-images/${e.item}-large.png" style="position: absolute; top: -35px; left: 10px;">`
				);
				t.append(a),
					this.fadeOutPrizeOnMainPlate(),
					this.fadeOutWheelPositionHighlight();
			}
			removePrizeOnMainPlate() {
				[
					this.$commonPlate,
					this.$uncommonPlate,
					this.$rarePlate,
				].forEach((e) => e.empty());
			}
			removeWheelPositionHighlight() {
				this.$wheelAnim.css("display", ""),
					this.$wheelAnim.attr("class", "wof-animation");
			}
			fadeOutPrizeOnMainPlate() {
				[
					this.$commonPlate,
					this.$uncommonPlate,
					this.$rarePlate,
				].forEach((e) => {
					e.fadeOut(7e3, () => {
						e.empty(), e.removeAttr("style");
					});
				});
			}
			fadeOutWheelPositionHighlight() {
				const e = this.$wheelAnim.clone();
				this.$wheel.prepend(e),
					this.removeWheelPositionHighlight(),
					e.fadeOut(1500, () => {
						e.css("display", "none"), e.css("opacity", "");
					});
			}
			populateWheel(e) {
				this.$wheelPlates.find("li").each((e, t) => {
					const a = o(t);
					a.addClass("old"), a.fadeOut(300, () => t.remove());
				}),
					Object.keys(e.plates).forEach((t, a) => {
						const i = e.plates[a],
							n = o(
								`<li class="wof-pos-${da[t]} wof-${i.rarity}" style="display: none;"></li>`
							),
							s = o(
								`<img title="${i.text}" src="item-images/${i.item}-small.png" class="gf-wheel-item" style="margin-top: -13px;">`
							);
						this.$wheelPlates.append(n.append(s)), n.fadeIn(700);
					}),
					this.executeWhenWheelIsFilled(() =>
						this.displayWheelPrizesValues()
					);
			}
			async resetWheel() {
				const e = await ra.reset();
				return (
					this.populateWheel(e), this.handleDiceAndStoneAmount(e), e
				);
			}
			async payoutWithPrize(e) {
				const t = await ra.payout(),
					a = t || e.prize;
				a &&
					(F.getComplexItem(F.keys.wheelOptions, "dices") &&
						Object.keys(sa.prize).includes(a.item) &&
						la.activatePrize(a.item),
					this.displayPrizeOnMainPlate(a),
					this.addPrizeToHistory(a)),
					Object.keys(sa.prize).includes(t.item) &&
						(await la.activatePrize(t.item));
				const i = await ra.load();
				this.handleDiceAndStoneAmount(i), this.populateWheel(i);
			}
			async spinAndWaitForWheel(e) {
				let t = e;
				t || (t = await ra.load());
				const a = await ra.spin(t);
				let i = null;
				if (!a || !a.position) return !1;
				for (
					i = this.wheelSpinHighlight(a.position),
						this.handleDiceAndStoneAmount(t),
						await Ae.wait(a.runtime + 200),
						t = await ra.load();
					"SPINNING" === t.info.status;

				)
					await Ae.wait(500), (t = await ra.load());
				return (
					await i(t.info.position), await this.payoutWithPrize(t), !0
				);
			}
			async spinTillStopped() {
				let e = 0,
					t = !1;
				for (; this.continueSpinning && e < this.$maxSpins.val(); ) {
					(e += 1),
						this.$autoStoneCounter.text(
							` (${e}/${this.$maxSpins.val()})`
						),
						await ha();
					const a = await ra.load();
					await ma(a),
						1 === e &&
							a.stock.dice.global + a.stock.dice.local > 5 &&
							(t = !0);
					const i = F.getComplexItem(F.keys.wheelOptions, "local");
					if (
						(i && a.stock.stone.local < 1) ||
						(!i &&
							a.stock.stone.global + a.stock.stone.local < 1) ||
						(a.stock.dice.global + a.stock.dice.local < 1 && t)
					)
						break;
					const n = await pa(a, () => this.resetWheel());
					this.handleDiceAndStoneAmount(n),
						await this.spinAndWaitForWheel(n),
						await ha();
				}
				(this.autoToggle = !1),
					this.$autoStone.removeClass("kcs_animated_gradient"),
					this.$autoStoneCounter.text(""),
					this.handleDiceAndStoneAmount(await ra.load());
			}
			async silentSpinTillNoStones(e) {
				for (; this.continueSpinning; ) {
					await ha();
					let t = await ra.load();
					if (
						(e && (await ma(t)),
						t.stock.stone.local < 1 || null === t.stock.stone.local)
					)
						return {
							crowns: await oa.crowns(),
							dices: t.stock.dice.global,
						};
					const a = await ua(t, () => ra.reset()),
						i = await ra.spin(a);
					if (!i)
						return {
							crowns: await oa.crowns(),
							dices: t.stock.dice.global,
						};
					for (
						await Ae.wait(i.runtime + 200), t = await ra.load();
						"SPINNING" === t.info.status;

					)
						await Ae.wait(500), (t = await ra.load());
					await ra.payout(), await ha();
				}
				return {
					crowns: await oa.crowns(),
					dices: (await ra.load()).stock.dice.global,
				};
			}
			async display() {
				this.displayInfoBox(),
					this.replaceWheelButtons(),
					this.replaceStoneDiceAmountDivs(),
					this.handleWheelInit();
			}
		}
		const ya = {
			0: "Szp",
			1: "Krzyżowiec",
			2: "Czarny rycerz",
			3: "WW",
			4: "Wieś",
			5: "Tempi",
			6: "Taran",
			7: "Hrabia",
		};
		async function ba(e) {
			for (const t of Object.keys(e)) {
				const a = o(await Q.ajax({ url: De(t) })),
					i = W.queryString(
						a.find('form[name="ignore"]').attr("action")
					).get("p");
				await Q.ajax({
					method: "POST",
					url: `??village=${t}&s=build_barracks&m=command&a=setTroopIgnore&p=${i}`,
					data: encodeURI(`ignore[]=${e[t].join("&ignore[]=")}`),
				});
			}
		}
		async function ka(e) {
			let t = 0;
			const a = [],
				i = [];
			for (const n of e)
				"Attaque" === n.description &&
					(i.push(n),
					0 === n.unitMax &&
						(n.villageId in a || (a[n.villageId] = []),
						a[n.villageId].push(n.id),
						(t += 1)));
			i.length &&
				(await (async function (e) {
					const t = Q.safeRequestWaitTimeInMiliseconds(e.length);
					for (const i of e) {
						let e = "";
						(e =
							i.unitMax === i.unitMin
								? `${ya[i.unitMax]}`
								: `??${ya[i.unitMax]}`),
							Q.log("Podpisuje atak");
						const n = await Q.ajax({
							url:
								((a = i.id),
								`zjax.php?func=renamecommand&fclass=game&id=${a}&type=2`),
							method: "POST",
							data: `text=${e}`,
						});
						console.log(n), await Ae.wait(t);
					}
					var a;
				})(i)),
				t > 15 && (await ba(a));
		}
		let fa = !1;
		async function wa(e, t, a) {
			let i = e.find("table.borderlist").eq(3).find("tr").slice(1);
			e.eq(0).find("th").length > 0 && (i = i.slice(1));
			const n = [],
				s = await re.travelCalculator();
			return (
				i.each((e, i) => {
					const r = o(i).children(),
						l = r.eq(0).text().trim(),
						c = Number(
							W.queryString(r.eq(0).find("a").attr("href")).get(
								"id"
							)
						),
						d = Number(
							W.queryString(
								r.eq(1).find("a").eq(0).attr("href")
							).get("id")
						),
						p = W.coordsToCoordList(r.eq(2).find("a").eq(1).text()),
						u = W.coordsToCoordList(r.eq(1).find("a").eq(1).text()),
						m = 1e3 * W.toNumber(r.eq(4).find("span").attr("time")),
						h = m + t,
						[g, y] = s.possibleUnits(p, u, t - a + m, m);
					n.push({
						description: l,
						id: c,
						villageId: d,
						source: p,
						destination: u,
						timestamp: h,
						unitMax: g,
						unitMin: y,
					});
				}),
				n
			);
		}
		function Aa(e) {
			return 1e3 * Number(e.find("#servertime").eq(0).attr("time"));
		}
		async function va(e) {
			if (
				(setTimeout(() => va(e), 5e4 + Math.round(2e4 * Math.random())),
				await (async function (e) {
					const t = e;
					return new Promise(async (a) => {
						if (fa) return a(!0);
						let i = !1;
						return (
							(t.onmessage = (t) => {
								"Master" === t.data && (i = !0),
									fa && e.postMessage("Master");
							}),
							t.postMessage("Hello"),
							await Ae.wait(300),
							i ? a(!1) : ((fa = !0), a(!0))
						);
					});
				})(e))
			) {
				Q.log("i am master");
				const a = await Q.ajax({ url: st() }),
					i = o(a),
					n = 0 === i.find("p.error").length,
					s = 1e3 * Number(i.find("#servertime").eq(0).attr("time"));
				if (
					((t = i),
					W.toNumber(
						t
							.find("#tower_left td.lay_tower_left_top_attack")
							.text()
					) > 0 && n)
				) {
					const t = i.find("form").eq(0);
					if (t.length) {
						if ("999" !== t.find("input").eq(0).val())
							return (
								await Q.ajax({
									url: t.attr("action"),
									method: "POST",
									data: "villages_per_page=999",
								}),
								void setTimeout(() => va(e), 5e3)
							);
					}
					const a = await (async function (e) {
						const t = e
								.find("table.borderlist")
								.eq(3)
								.find("tr")
								.eq(0)
								.find("td")
								.eq(0),
							a = [],
							i = W.toNumber(
								F.getItem(F.keys.signAttackTimestamp)
							);
						return (
							t.length
								? t.find("a").each(async (e, t) => {
										const n = o(t);
										try {
											const e = await Q.ajax({
													url: n.attr("href"),
												}),
												t = o(e);
											a.push(...(await wa(t, Aa(t), i)));
										} catch (e) {
											Q.log(
												"Had a problem refreshing left flag;(",
												e
											);
										}
								  })
								: a.push(...(await wa(e, Aa(e), i))),
							a
						);
					})(i);
					await ka(a);
				}
				F.setItem(F.keys.signAttackTimestamp, s);
			}
			var t;
		}
		class xa {
			displayIgnoreBoxesForAttacks() {
				const e = this.$overviewTable.find("tr");
				e.slice(1, e.length).each((e, t) => {
					const a = o(t).children(),
						i = a.eq(0),
						n = a.eq(1),
						s = Number(
							W.queryString(i.find("a").eq(0).attr("href")).get(
								"id"
							)
						),
						r = Number(
							W.queryString(n.find("a").eq(0).attr("href")).get(
								"id"
							)
						);
					i.prepend(
						`<input type="checkbox" id="${s}" settlement="${r}">`
					);
				});
				const t = o(`<input type="submit" value="${U.ignore}">`),
					a = o('<input type="checkbox">');
				this.$overviewTable.append(
					o("<tr></tr>").append(
						o('<th colspan="3"></th>').append(a, U.markAll),
						o('<td colspan="2"></td>').append(t)
					)
				),
					a.on("change", () => {
						this.$page
							.find('input[type="checkbox"]')
							.not(":last")
							.each((e, t) => {
								o(t).prop("checked", a.prop("checked"));
							});
					}),
					t.click(async () => {
						const e = this.$page
								.find('input[type="checkbox"]')
								.not(":last"),
							a = {};
						e.each((e, t) => {
							const i = o(t);
							if (i.prop("checked")) {
								const e = W.toNumber(i.attr("settlement"));
								e in a || (a[e] = []),
									a[e].push(W.toNumber(i.attr("id")));
							}
						});
						const i = E.$spinner("12px");
						t.after(i),
							await ba(a),
							i.remove(),
							setTimeout(() => window.location.reload(), 100);
					});
			}
			async display(e) {
				this.$page = e;
				const t = e.find("table.borderlist");
				(this.$overviewTable = null),
					t.length > 3 && (this.$overviewTable = t.eq(3)),
					this.$overviewTable && this.displayIgnoreBoxesForAttacks();
			}
			async work() {
				const e = new BroadcastChannel("KCSIncomingAttacks");
				setTimeout(() => va(e), 2e3 + Math.round(3e3 * Math.random()));
			}
		}
		async function $a(e, t = null) {
			const a = o(await Q.ajax({ url: Ne() })),
				i = new Yt(a);
			if (i.isResearchable(e)) {
				const t = o(await Q.ajax({ url: Ze() })),
					a = new ta(t);
				await a.research(e);
			}
			return t
				? xe.units[e] < t
					? i.recruit(e, t - xe.units[e])
					: null
				: i.recruit(e);
		}
		class Sa {
			constructor(e) {
				this.$page = e;
			}
			async attacksWatcher() {
				new xa().work();
			}
			async placeVillage() {
				this.$page.find('img[src$="last-village-enobled.jpg"]')
					.length &&
					(await Q.ajax({
						url: "??village=0",
						method: "POST",
						data: "param_direction=4",
					})),
					this.$page.find("#COMPASS_NW").length &&
						(await Q.ajax({
							url: "??village=0",
							method: "POST",
							data: "param_direction=4",
						}));
			}
			async settlementBuildUp() {
				await this.placeVillage();
				const e = await Q.ajax({ url: Ye() }),
					t = new Vt(o(e)),
					a = [],
					i = {
						[O.type.storage.name]: 3,
						[O.type.farm.name]: 3,
						[O.type.barracks.name]: 1,
					};
				for (const e of Object.keys(i)) {
					const n = t.getBuildingLevel(e),
						s = i[e] - n;
					s > 0 && a.push(await t.build(e, s));
				}
				if (a.length) return void (await Promise.all([...a]));
				await $a(re.type.sword.name, 10);
				const n = (await H.speed()).world,
					s = { [O.type.storage.name]: 9, [O.type.wall.name]: 5 };
				H.id < 15
					? (s[O.type.farm.name] = 19)
					: H.id < 22
					? (s[O.type.farm.name] = 16)
					: (s[O.type.farm.name] = 14),
					1 === n
						? ((s[O.type.stone.name] = 11),
						  (s[O.type.wood.name] = 16),
						  (s[O.type.iron.name] = 13))
						: 2 === n
						? ((s[O.type.stone.name] = 4),
						  (s[O.type.wood.name] = 9),
						  (s[O.type.iron.name] = 6))
						: 3 === n
						? ((s[O.type.stone.name] = 2),
						  (s[O.type.wood.name] = 4),
						  (s[O.type.iron.name] = 2))
						: 4 === n &&
						  ((s[O.type.stone.name] = 1),
						  (s[O.type.wood.name] = 3),
						  (s[O.type.iron.name] = 2));
				const r = [
					O.type.storage.name,
					O.type.stone.name,
					O.type.wood.name,
					O.type.iron.name,
					O.type.farm.name,
					O.type.wall.name,
				];
				for (const e of r) {
					const i = t.getBuildingLevel(e),
						n = s[e] - i;
					n > 0 && a.push(await t.build(e, n));
				}
				if (a.length) {
					const e = await Promise.all([...a]);
					if (new Vt(o(e)).underConstructionCount > 0) return;
				}
				if (5 === t.getBuildingLevel(O.type.wall.name)) {
					const e = o(await Q.ajax({ url: Ye() })),
						i = new Vt(e);
					if (
						(xe.update(e),
						0 === i.underConstructionCount &&
							xe.stone > 2e3 &&
							xe.wood > 2e3 &&
							xe.iron > 2e3)
					) {
						const e = {
							[O.type.hide.name]: 10,
							[O.type.main.name]: 10,
							[O.type.market.name]: 5,
							[O.type.wall.name]: 10,
						};
						a.push(t.build(O.type.wall.name, 1));
						for (const i of Object.keys(e)) {
							const n = Math.round(Math.random() * e[i]);
							n > 0 && a.push(await t.build(i, n));
						}
						a.length && (await Promise.all([...a]));
					}
				}
				await $a(re.type.sword.name, 30), await $a(re.type.farmer.name);
			}
			async stoneAttack(e, t) {
				if (
					(await this.settlementBuildUp(),
					xe.units[re.type.farmer.name] < 30)
				)
					return;
				let a;
				if (
					(o(await Q.ajax({ url: Xe(e) }))
						.find("table.borderlist")
						.eq(2)
						.find("tr:not(:first)")
						.each((t, i) => {
							const n = o(i).children().eq(1);
							n.text().trim() === e &&
								(a = n.find("a").eq(0).attr("href"));
						}),
					!a)
				)
					return;
				const i = await Q.ajax({ url: a }),
					n = new aa(o(i)),
					{ settlements: s, settlementCount: r } = n;
				if (r < 1) return;
				const l = await Q.ajax({ url: s[0].infoLink }),
					c = new ia(o(l)).coords,
					d = o(
						await Q.ajax({
							url: Ke(xe.id),
							method: "POST",
							data: `send_x=${c[0]}&send_y=${c[1]}&attack=1&farmer=30`,
						})
					),
					p = W.toNumber(t) + Math.ceil((t / 3) * Math.random());
				await Q.multiSend(
					Math.min(Math.floor(xe.units[re.type.farmer.name] / 30), p),
					{
						url: d.find("form").eq(0).attr("action"),
						method: "POST",
						data: d.find("form").eq(0).serialize(),
					}
				);
			}
			async createAlly(e, t) {
				await this.placeVillage();
				const a = o(await Q.ajax({ url: pt() }))
					.find('form[action*="&a=allyFound"]')
					.eq(0);
				a.length &&
					(await Q.ajax({
						url: a.attr("action"),
						method: "POST",
						data: { ally_name: t, ally_tag: e },
					}));
			}
			async fortuneWheelSpin(e) {
				await this.placeVillage();
				const t = o(await Q.ajax({ url: ct() }));
				return new ga(t).silentSpinTillNoStones(!0 === e);
			}
			async newServerStart() {
				await this.placeVillage();
				const e = await Q.ajax({ url: Ye() }),
					{ id: t } = ve(o(e));
				F.setItem(F.keys.castleAutoBuild, {
					[t]: {
						[O.type.stone.name]: !0,
						[O.type.iron.name]: !0,
						[O.type.wood.name]: !0,
					},
				}),
					(window.location = Ye());
			}
			async recruitFarmers() {
				await this.placeVillage(), await $a(re.type.farmer.name);
			}
		}
		class qa {
			constructor(e) {
				this.$page = e;
			}
			async retrieveMemberDetails() {
				const e = this.$page
						.find("table.borderlist")
						.eq(2)
						.find('a[href*="info_player"]'),
					t = [];
				return (
					e.each((e, a) => {
						t.push(Q.ajax({ url: o(a).attr("href") }));
					}),
					(await Promise.all([...t])).map((t, a) => {
						const i = new aa(o(t));
						return {
							link: e[a],
							playerName: i.playerName,
							settlementCount: i.settlementCount,
							settlements: i.settlements,
							armyScore: i.armyScore,
							maxArmyScore: i.maxArmyScore,
							totalScore: i.totalScore,
						};
					})
				);
			}
		}
		class _a {
			constructor(e) {
				(this.$page = e),
					(this.$allyTable = this.$page
						.find("table.borderlist")
						.eq(2)),
					(this.allyTag = this.$allyTable
						.find("tr")
						.eq(2)
						.find("td")
						.eq(1)
						.text());
			}
			async retrieveAllMemberDetails() {
				const e = this.$allyTable
						.find('a[href*="info_member"]')
						.attr("href"),
					t = await Q.ajax({ url: e });
				return new qa(o(t)).retrieveMemberDetails();
			}
			async displayAllyDetails(e) {
				const t = E.$spinner("11px");
				e.append(t);
				let a = 0,
					i = 0,
					n = 0;
				const s = await this.retrieveAllMemberDetails(),
					r = o(`<span class="click"> ${U.asBbCodes}</span>`).prepend(
						E.$arrow()
					),
					l = o(
						'<table class="borderlist" style="width: 420px;"></table>'
					);
				o("<tr></tr>")
					.append(`<th>${U.player}</th>`)
					.append(`<th>${U.settlements}</th>`)
					.append(`<th colspan="2">${U.armyScore}</th>`)
					.appendTo(l),
					s.sort((e, t) => t.armyScore - e.armyScore),
					s.forEach((e) => {
						(n += e.settlementCount),
							(a += e.armyScore),
							(i += e.maxArmyScore),
							o("<tr></tr>")
								.append(
									`<td><a href="${e.link}">${e.playerName}</a></td>`
								)
								.append(
									`<td>${W.numberToPrettyString(
										e.settlementCount
									)}</td>`
								)
								.append(`<td>${e.armyScore}</td>`)
								.append(
									`<td>${W.numberToPrettyPercentage(
										e.armyScore / e.maxArmyScore
									)}</td>`
								)
								.appendTo(l);
					}),
					o("<tr></tr>")
						.append(`<th>${U.overall}</th>`)
						.append(`<th>${W.numberToPrettyString(n)}</th>`)
						.append(`<th>${W.numberToPrettyString(a)}</th>`)
						.append(`<th>${W.numberToPrettyPercentage(a / i)}</th>`)
						.appendTo(l);
				const c = o(
						`<span class="click"> ${U.settlementsDetails}</span>`
					).prepend(E.$arrow()),
					d = o(
						'<input type="number" min="0" max="999" value="10" style="width: 42px; margin: 1px;">'
					),
					p = o(
						'<input type="number" min="0" value="3000" style="width: 76px; margin: 1px;">'
					),
					u = o(
						`<span class="click"> ${U.settlementsInAllyRange}</span>`
					).prepend(E.$arrow()),
					m = o("<span></span>").append(
						u,
						U.settlementsInAllyRangeMaxDistance,
						d,
						", ",
						U.settlementsInAllyRangeMinPoints,
						p
					),
					h = o(
						`<span class="click"> ${U.statusExportAsBBCodes}</span>`
					).prepend(E.$arrow());
				this.$page
					.find("table.borderlist")
					.eq(3)
					.before(
						r,
						"<br>",
						l,
						c,
						"<br>",
						m,
						"<br>",
						h,
						"<br>",
						"<br>",
						"<br>"
					),
					t.remove(),
					e.hide(),
					h.one("click", () => {
						let e = "";
						s.forEach((t) => {
							if (0 === t.settlementCount) return;
							const a = F.getItem(F.keys.mapGroups) || {},
								i = {};
							for (const e of Object.keys(a)) {
								const t = [];
								e &&
									Object.keys(a[e]).forEach((e) => {
										"0" === e && t.push("offowa"),
											"1" === e && t.push("defowa"),
											"2" === e &&
												t.push("sojuszowy def");
									}),
									(i[e] = t.join(", "));
							}
							t.settlements.forEach((t) => {
								const a = i[t.id];
								a &&
									(e += `${a} - [village]${t.coords[0]}|${t.coords[1]}[/village]<br>`);
							});
						}),
							ce.textCopyBox(e);
					}),
					u.click(async () => {
						const e = E.$spinner("11px");
						m.after(e);
						const t = o(await Q.ajax({ url: lt() })),
							a = new aa(t).ally;
						if (0 === a.id) {
							const t = o(
								`<span style="color: red; font-weight: bold;">&nbsp;${U.needToBeInAlly}</span>`
							);
							return m.after(t), t.fadeOut(7e3), void e.remove();
						}
						const i = o(await Q.ajax({ url: Ee(a.id) })),
							n = new _a(i),
							r = await n.retrieveAllMemberDetails(),
							l = [],
							c = [];
						s.forEach((e) => {
							0 !== e.settlementCount &&
								(e.totalScore < p.val() ||
									e.settlements.forEach((e) => {
										c.push(e.coords);
									}));
						}),
							r.forEach((e) => {
								0 !== e.settlementCount &&
									e.settlements.forEach((e) => {
										l.push(e.coords);
									});
							});
						const u = d.val(),
							h = [];
						if (
							(l.forEach((e) => {
								for (let t = c.length - 1; t >= 0; t -= 1) {
									W.calculateDistance(e, c[t]) < u &&
										(h.push(c[t]), c.splice(t, 1));
								}
							}),
							h.length > 0)
						) {
							let e = "";
							h.forEach((t) => {
								let a = 0,
									i = 0,
									n = 0,
									r = null;
								s.forEach((e) => {
									e.settlements.forEach((s) => {
										s.coords === t &&
											(({ id: n, name: r, score: a } = s),
											({ totalScore: i } = e));
									});
								}),
									(e += `${t.join("|")}/${n}/${r.replace(
										/\//g,
										"\\"
									)}/${a}/${i}<br>`);
							}),
								ce.textCopyBox(
									e,
									null,
									`${U.totalFound} ${h.length}`
								);
						} else {
							const e = o(
								`<span style="color: red; font-weight: bold;">&nbsp;${U.cannotFindAnySettlementsInRange}</span>`
							);
							m.after(e), e.fadeOut(7e3);
						}
						e.remove();
					}),
					c.one("click", () => {
						c.hide();
						const e = o(
							'<table class="borderlist" style="min-width: 420px;"></table>'
						);
						s.forEach((t) => {
							if (0 === t.settlementCount) return;
							o("<tr></tr>")
								.append(
									`\n          <th colspan="4">\n            ${
										U.player
									} <a href="${t.link}"><b>${
										t.playerName
									}</b></a>:\n            ${W.numberToPrettyString(
										t.armyScore
									)} (${W.numberToPrettyPercentage(
										t.armyScore / t.maxArmyScore
									)}),\n            ${W.numberToPrettyString(
										t.totalScore
									)}\n          </th>\n        `
								)
								.appendTo(e);
							const a = F.getItem(F.keys.mapGroups) || {},
								i = {};
							for (const e of Object.keys(a)) {
								const t = [];
								e &&
									Object.keys(a[e]).forEach((e) => {
										"0" === e && t.push("offowa"),
											"1" === e && t.push("defowa"),
											"2" === e &&
												t.push("sojuszowy def");
									}),
									(i[e] = t.join(", "));
							}
							t.settlements.forEach((t) => {
								const a = o("<tr></tr>");
								a.append(
									`<td><a href="${t.infoLink}">${t.name}</a></td>`
								),
									a.append(
										o("<td></td>")
											.append(
												`<a href="${t.mapLink}">${t.coords[0]}|${t.coords[1]}</a>`
											)
											.append(
												E.$chains(
													`${t.coords[0]}|${t.coords[1]}`
												)
											)
									),
									a.append(
										`<td>${W.numberToPrettyString(
											t.score
										)}</td>`
									),
									a.append(`<td>${i[t.id] || ""}</td>`),
									e.append(a);
							});
						}),
							c.after("<br>", e);
					}),
					r.click(() => {
						let e = "<table><tbody>";
						s.forEach((t) => {
							e +=
								`<tr><td>[player]${
									t.playerName
								}[/player]:&nbsp;</td><td>${W.numberToPrettyString(
									t.armyScore
								)}` +
								` (${W.numberToPrettyPercentage(
									t.armyScore / t.maxArmyScore
								)})</td></tr>\n`;
						}),
							(e +=
								'<tr><td colspan="2">-------------</td></tr>\n'),
							(e += `<tr><td colspan="2">[ally]${this.allyTag}[/ally]:&nbsp;`),
							(e += `${W.numberToPrettyString(
								a
							)} (${W.numberToPrettyPercentage(
								a / i
							)})</td></tr>`),
							ce.textCopyBox(e);
					});
			}
			display() {
				const e = o(
					`<span class="click"> ${U.allyDetails}</span>`
				).prepend(E.$arrow());
				this.$page
					.find("div.contentpane")
					.eq(1)
					.find('a[href*="info_member"]')
					.eq(0)
					.parent()
					.parent()
					.parent()
					.parent()
					.parent()
					.append(e),
					e.one("click", async () => this.displayAllyDetails(e));
			}
		}
		function Ca(e, t) {
			const a = [];
			let i, n;
			for (i = 0, n = e.length; i < n; i += t) a.push(e.slice(i, i + t));
			return a;
		}
		async function Ta(e, t, a, i) {
			let n;
			if (((n = void 0 === a ? 2 : a), n < 0)) {
				if (
					i &&
					i.messages &&
					i.messages.error &&
					i.messages.error.length > 0
				)
					throw new Error(i.messages.error[0]);
				throw new Error("Error!");
			}
			let s = await Q.ajax({
				url: "zjax.php?func=login&fclass=asys",
				cache: !1,
				data: { name: e, hash: t },
			});
			return (
				(null === s ||
					(s.messages &&
						s.messages.error &&
						s.messages.error.length > 0)) &&
					(s = await Ta(e, t, n - 1, s)),
				s
			);
		}
		async function Ba(e, t, a, i, n) {
			let s;
			if (((s = void 0 === i ? 3 : i), s < 0)) {
				if (
					n &&
					n.messages &&
					n.messages.error &&
					n.messages.error.length > 0
				)
					throw new Error(n.messages.error[0]);
				throw new Error("Error!");
			}
			let r = await Q.ajax({
				url: "zjax.php?func=loginToGameround&fclass=asys",
				cache: !1,
				data: { serverId: e },
			});
			if (r.messages && r.messages.error)
				throw new Error(r.messages.error);
			if (
				void 0 === r.redirect ||
				r.redirect.match("user=&") ||
				r.redirect.match("pass=&")
			) {
				try {
					await Ta(t, a);
				} catch (e) {
					throw e;
				}
				r = await Ba(e, t, a, s - 1, r);
			}
			return r;
		}
		async function ja(e, t, a, i) {
			const n = await new Promise(async (i) => {
				try {
					return i(await Ba(e, t, a));
				} catch (e) {
					return d({ messages: { error: [e.message] } }), i(null);
				}
			});
			if (n) {
				const e = window.open(n.redirect);
				return new Promise((t) => {
					const a = n.redirect.split("?")[0];
					!(function n() {
						!1 === e.closed
							? (e.postMessage(i, a),
							  setTimeout(() => {
									n();
							  }, 200))
							: t();
					})();
				});
			}
			return null;
		}
		function za(e) {
			const t = [...Array(e + 1).keys()];
			return t.shift(), t;
		}
		function Ma(e) {
			let t = null,
				a = null;
			const i = () => {
				if (null === F.getItem(F.keys.stoneAttackTimestamp)) return;
				JSON.stringify(t) !==
					JSON.stringify(F.getItem(F.keys.stoneAttackTimestamp)) &&
					((t = F.getItem(F.keys.stoneAttackTimestamp)),
					(() => {
						if (null === F.getItem(F.keys.stoneAttackTimestamp))
							return;
						e.html("");
						const i = new Date(t.start).toLocaleString("pl-PL"),
							n = Ae.convertDurationInSecondsIntoHMSString(
								(t.end - t.start) / 1e3
							);
						a = o("<span></span>");
						const s = o(
							`<span>${U.lastStoneAttackTime}${i} (${U.lasted} ${n}, ${U.timePassed} </span>`
						).append(a, ")");
						e.append("<br>", s);
					})());
				const i = new Date().getTime() - t.start;
				let n = "";
				i > 864e5
					? (n = 'style="color: red"')
					: i > 861e5 && (n = 'style="color: darkviolet"');
				const s = `<span ${n}>${Ae.convertDurationInSecondsIntoHMSString(
					i / 1e3
				)}</span>`;
				a.html(s);
			};
			setInterval(() => i(), 1e3), i();
		}
		class Ua {
			constructor(e) {
				(this.$page = e),
					(this.serverPerChunk = 10),
					(this.autoWorkSummaries = {}),
					(this.$username = o(
						'<input class="kcs_lobby_input" type="text" size="22" id="torInjectionUsername" value="">'
					)),
					(this.$password = o(
						'<input class="kcs_lobby_input" type="text" size="22" id="torInjectionPassword" value="">'
					)),
					(this.$attackTarget = o(
						'<input class="kcs_lobby_input" type="text" size="22" id="torInjectionAttackTarget" value="">'
					)),
					(this.$attackCount = o(
						'<input class="kcs_lobby_input" type="number" min="1" size="2" id="torInjectionAttackCount" value="">'
					)),
					(this.$serversPerStep = o(
						'<input class="kcs_lobby_input" type="number" min="1" size="2" id="torInjectionServerPerStep" value="">'
					)),
					this.$username.val() ||
						this.$username.val(F.getItem(F.keys.username)),
					this.$password.val() ||
						this.$password.val(F.getItem(F.keys.password)),
					this.$attackTarget.val() ||
						this.$attackTarget.val(F.getItem(F.keys.attackTarget)),
					this.$serversPerStep.val() ||
						this.$serversPerStep.val(
							F.getItem(F.keys.serversPerStep) || 9
						),
					this.$attackCount.val() ||
						this.$attackCount.val(
							F.getItem(F.keys.attackCount) || 7
						);
			}
			get username() {
				return this.$username.val();
			}
			get password() {
				return this.$password.val();
			}
			get attackTarget() {
				return this.$attackTarget.val();
			}
			get serversPerStep() {
				return W.toNumber(this.$serversPerStep.val());
			}
			get loggedIn() {
				return 0 === this.$page.find("#signUpButton").length;
			}
			async loginWhenNeeded() {
				if (!this.username || !this.password)
					return window.alert(U.needCredentials), !1;
				if (!1 === this.loggedIn)
					try {
						return this.login();
					} catch (e) {
						return !1;
					}
				return !0;
			}
			async loginToLobby() {
				return Ta(this.username, this.password);
			}
			async loginToGameServer(e) {
				return Ba(e, this.username, this.password);
			}
			async login() {
				if (!this.username || !this.password)
					return window.alert(U.needCredentials), !1;
				let e;
				try {
					e = await this.loginToLobby();
				} catch (e) {
					return d({ messages: { error: [e.message] } }), !1;
				}
				return (
					void 0 !== e.special &&
						void 0 !== e.special.login &&
						!0 === e.special.login &&
						(d({ messages: { info: [U.loggedIn] } }),
						l(e),
						c("welcome")),
					!0
				);
			}
			async openRange(e, t) {
				const a = [];
				for (const i of e)
					a.push(
						ja(i, this.username, this.password, { ...t, server: i })
					);
				return await Promise.all([...a]), !0;
			}
			async openStepByStep(e, t, a) {
				const i = Ca(e, t);
				for (const e of i) await this.openRange(e, a);
				return !0;
			}
			receiveAutoWorkSummaries(e) {
				const { data: t } = e;
				t.job === wt.wheelSpin &&
					(wt.wheelSpin in this.autoWorkSummaries ||
						(this.autoWorkSummaries[wt.wheelSpin] = {}),
					(this.autoWorkSummaries[wt.wheelSpin][t.server] = {
						crowns: t.crowns,
						dices: t.dices,
					}));
			}
			displayAutoWorkSummary(e) {
				if (e === wt.wheelSpin) {
					const e = o("<table></table>");
					e.append(
						o('<tr style="border-top: 1px solid black"></tr>')
							.append(`<td>${U.server}</td>`)
							.append('<td style="padding: 0 5px 0 5px">|</td>')
							.append(`<td>${U.crowns}</td>`)
					);
					let t = 0,
						a = 0;
					for (const [i, n] of Object.entries(
						this.autoWorkSummaries[wt.wheelSpin]
					))
						n.crowns > 0 &&
							(e.append(
								o("<tr></tr>")
									.append(
										`<td style="text-align: right;">&nbsp;s${i}</td>`
									)
									.append(
										'<td style="padding: 0 5px 0 5px">|</td>'
									)
									.append(`<td>${n.crowns}&nbsp;</td>`)
							),
							(t += n.crowns)),
							({ dices: a } = n);
					let i = "";
					(i += `${U.crownsAll}${t}, ${U.dicesAll}${a}<br>`),
						(i += `(${U.excelSummary})<br>`),
						(i += `${this.username};${t};${a}<br>`),
						(i += e.get(0).outerHTML),
						ce.textCopyBox(i);
				}
			}
			displayOptions(e, t) {
				e.append("<br>");
				const a = o(
					'<div style="display: inline-block; line-height: 32px;"></div>'
				);
				let i = F.getItem(F.keys.playServer);
				i ||
					((i = t[t.length - 1] + 1),
					F.setItem(F.keys.playServer, i));
				const n = o(
						`<input type="number" class="kcs_lobby_input" min="1" size="2" value="${i}" style="margin-top: 3px;">`
					),
					s = o(
						`<div class="kcs_lobby_button" title="${U.hotkey}z">${U.castle}</div>`
					),
					r = o(
						`<div class="kcs_lobby_button" title="${U.hotkey}r">${U.barracks}</div>`
					),
					l = o(
						`<div class="kcs_lobby_button" title="${U.hotkey}r">${U.barracksRecruit}</div>`
					),
					c = o(
						`<div class="kcs_lobby_button">${U.tryNewServer}</div>`
					);
				e.append(
					o(
						'<div class="kcs_main_container" style="line-height: 20px; margin-top: 5px;"></div>'
					).append(
						o(
							'<div style="text-align: center; display: inline-block"></div>'
						).append(U.playServer, "<br>", n)
					)
				),
					a
						.append(s)
						.append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
						.append(r)
						.append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
						.append(l)
						.append("<br>")
						.append(c),
					e.append(a).append("<br><br>"),
					Ca(t, this.serverPerChunk).forEach((t) => {
						const a = o(
								'<div style="display: inline-block; line-height: 32px;"></div>'
							),
							i = o(
								`<div class="kcs_lobby_button">${U.castle}</div>`
							),
							n = o(
								`<div class="kcs_lobby_button">${U.premiumWheelOfFortune}</div>`
							),
							s = o(
								`<div class="kcs_lobby_button">${U.premiumInventory}</div>`
							);
						e.append(
							'<div class="kcs_main_container">' +
								`${U.servers} ${t[0]} - ${
									t[t.length - 1]
								}:</div>`
						),
							a
								.append(i)
								.append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
								.append(n)
								.append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
								.append(s),
							e.append(a).append("<br>"),
							i.click(async () => {
								(await this.loginWhenNeeded()) &&
									this.openRange(t, { job: wt.castle });
							}),
							n.click(async () => {
								(await this.loginWhenNeeded()) &&
									this.openRange(t, {
										job: wt.premiumWheelOfFortune,
									});
							}),
							s.click(async () => {
								(await this.loginWhenNeeded()) &&
									this.openRange(t, {
										job: wt.premiumInventory,
									});
							});
					});
				const d = o(
					'<div style="display: inline-block;" class="kcs_main_click">Jak to działa?</div>'
				).prepend(E.$description());
				d.on("click", async () => {
					ce.textBox(
						U.descriptions.lobbyText,
						U.descriptions.lobbyTitle
					);
				}),
					e.append(
						"<br>",
						'<div class="kcs_main_container"></div>',
						d,
						"<br>"
					);
				const p = o(
						'<div style="display: inline-block; line-height: 28px;"></div>'
					),
					u = o(
						`<div class="kcs_lobby_button" title="${U.delayedHotkey}a">${U.stoneAttack}</div>`
					),
					m = o(
						`<div class="kcs_lobby_button" title="${U.delayedHotkey}b">${U.settlementBuildUp}</div>`
					),
					h = o(
						`<div class="kcs_lobby_button">${U.createAlly}</div>`
					),
					g = o(
						'<input type="text" class="kcs_lobby_input" minlength="2" maxlength="6">'
					),
					y = o(
						'<input type="text" class="kcs_lobby_input" minlength="4" maxlength="32">'
					),
					b = o(
						`<div class="kcs_lobby_button" title="${U.delayedHotkey}k">${U.wheelSpinner}</div>`
					),
					k = o(
						`<div class="kcs_lobby_button">${U.wheelSpinnerNoStones}</div>`
					),
					f = o(
						`<div class="kcs_lobby_button">${U.recruitFarmers}</div>`
					);
				o(
					`<div class="kcs_main_container">${U.servers} ${t[0]} - ${
						t[t.length - 1]
					}: </div>`
				).appendTo(e),
					p
						.append(m)
						.append("&nbsp;&nbsp;&nbsp;")
						.append(u)
						.append("<br>")
						.append(k)
						.append("&nbsp;&nbsp;&nbsp;")
						.append(b)
						.append("<br>")
						.append(h)
						.append("&nbsp;&nbsp;&nbsp;")
						.append(f)
						.append("<br>")
						.append(`${U.stepByStep} `)
						.append(this.$serversPerStep)
						.append("<br>")
						.append(`${U.stoneAttackCount} `)
						.append(this.$attackCount)
						.append(` ${U.randomAttack}`)
						.append("<br>")
						.append(`${U.stoneAttackTarget} `)
						.append(this.$attackTarget)
						.append("<br>")
						.append(`${U.createAllyName} `)
						.append(y)
						.append("<br>")
						.append(`${U.createAllyTag} `)
						.append(g),
					e.append(p),
					u.on("click", async () => {
						u.addClass("kcs_lobby_button_pressed"),
							u.addClass("kcs_lobby_button_working");
						const e = this.$attackTarget.val();
						if (!e)
							return (
								window.alert(U.needTarget),
								u.removeClass("kcs_lobby_button_working"),
								void u.css("color", "red")
							);
						if (!(await this.loginWhenNeeded()))
							return (
								u.removeClass("kcs_lobby_button_working"),
								void u.css("color", "red")
							);
						u.off("click");
						const a = this.$attackCount.val() || 15,
							i = new Date().getTime();
						await this.openStepByStep(t, this.serversPerStep, {
							job: wt.stoneAttack,
							target: e,
							attackCount: a,
						});
						const n = new Date().getTime();
						F.setItem(F.keys.stoneAttackTimestamp, {
							start: i,
							end: n,
						}),
							u.removeClass("kcs_lobby_button_working"),
							u.css("color", "lime");
					}),
					m.on("click", async () => {
						if (
							(m.addClass("kcs_lobby_button_pressed"),
							m.addClass("kcs_lobby_button_working"),
							!(await this.loginWhenNeeded()))
						)
							return (
								m.removeClass("kcs_lobby_button_working"),
								void m.css("color", "red")
							);
						m.off("click"),
							m.addClass("kcs_lobby_button_pressed"),
							m.addClass("kcs_lobby_button_working"),
							await this.openStepByStep(t, this.serversPerStep, {
								job: wt.settlementBuildUp,
							}),
							m.removeClass("kcs_lobby_button_working"),
							m.css("color", "lime");
					}),
					f.on("click", async () => {
						if (
							(f.addClass("kcs_lobby_button_pressed"),
							f.addClass("kcs_lobby_button_working"),
							!(await this.loginWhenNeeded()))
						)
							return (
								f.removeClass("kcs_lobby_button_working"),
								void f.css("color", "red")
							);
						f.off("click"),
							f.addClass("kcs_lobby_button_pressed"),
							f.addClass("kcs_lobby_button_working"),
							await this.openStepByStep(t, this.serversPerStep, {
								job: wt.recruitFarmers,
							}),
							f.removeClass("kcs_lobby_button_working"),
							f.css("color", "lime");
					}),
					h.on("click", async () => {
						h.addClass("kcs_lobby_button_pressed"),
							h.addClass("kcs_lobby_button_working");
						const e = g.val(),
							a = y.val();
						return e
							? e && (e.length < 2 || e.length > 6)
								? (window.alert(U.needAllyTagRange),
								  h.removeClass("kcs_lobby_button_working"),
								  void h.css("color", "red"))
								: a
								? e && (e.length < 4 || e.length > 32)
									? (window.alert(U.needAllyNameRange),
									  h.removeClass("kcs_lobby_button_working"),
									  void h.css("color", "red"))
									: (await this.loginWhenNeeded())
									? (h.off("click"),
									  await this.openStepByStep(
											t,
											this.serversPerStep,
											{
												job: wt.createAlly,
												name: a,
												tag: e,
											}
									  ),
									  h.removeClass("kcs_lobby_button_working"),
									  void h.css("color", "lime"))
									: (h.removeClass(
											"kcs_lobby_button_working"
									  ),
									  void h.css("color", "red"))
								: (window.alert(U.needAllyName),
								  h.removeClass("kcs_lobby_button_working"),
								  void h.css("color", "red"))
							: (window.alert(U.needAllyTag),
							  h.removeClass("kcs_lobby_button_working"),
							  void h.css("color", "red"));
					}),
					b.on("click", async () => {
						if (
							(b.addClass("kcs_lobby_button_pressed"),
							b.addClass("kcs_lobby_button_working"),
							!(await this.loginWhenNeeded()))
						)
							return (
								b.removeClass("kcs_lobby_button_working"),
								void b.css("color", "red")
							);
						b.off("click"),
							b.addClass("kcs_lobby_button_pressed"),
							b.addClass("kcs_lobby_button_working"),
							await this.openStepByStep(
								t,
								Math.min(this.serversPerStep, 4),
								{ job: wt.wheelSpin, useDices: !0 }
							),
							b.removeClass("kcs_lobby_button_working"),
							b.css("color", "lime"),
							this.displayAutoWorkSummary(wt.wheelSpin);
					}),
					k.on("click", async () => {
						if (
							(k.addClass("kcs_lobby_button_pressed"),
							k.addClass("kcs_lobby_button_working"),
							!(await this.loginWhenNeeded()))
						)
							return (
								k.removeClass("kcs_lobby_button_working"),
								void k.css("color", "red")
							);
						k.off("click"),
							await this.openStepByStep(t, this.serversPerStep, {
								job: wt.wheelSpin,
								useDices: !1,
							}),
							k.removeClass("kcs_lobby_button_working"),
							k.css("color", "lime"),
							this.displayAutoWorkSummary(wt.wheelSpin);
					}),
					s.on("click", async () => {
						if (
							(s.addClass("kcs_lobby_button_pressed"),
							s.addClass("kcs_lobby_button_working"),
							!(await this.loginWhenNeeded()))
						)
							return (
								s.removeClass("kcs_lobby_button_pressed"),
								void s.removeClass("kcs_lobby_button_working")
							);
						ja(W.toNumber(n.val()), this.username, this.password, {
							job: wt.castle,
						}),
							s.removeClass("kcs_lobby_button_pressed"),
							s.removeClass("kcs_lobby_button_working");
					}),
					r.on("click", async () => {
						if (
							(r.addClass("kcs_lobby_button_pressed"),
							r.addClass("kcs_lobby_button_working"),
							!(await this.loginWhenNeeded()))
						)
							return (
								r.removeClass("kcs_lobby_button_pressed"),
								void r.removeClass("kcs_lobby_button_working")
							);
						ja(W.toNumber(n.val()), this.username, this.password, {
							job: wt.barracks,
						}),
							r.removeClass("kcs_lobby_button_pressed"),
							r.removeClass("kcs_lobby_button_working");
					}),
					l.on("click", async () => {
						if (
							(l.addClass("kcs_lobby_button_pressed"),
							l.addClass("kcs_lobby_button_working"),
							!(await this.loginWhenNeeded()))
						)
							return (
								l.removeClass("kcs_lobby_button_pressed"),
								void l.removeClass("kcs_lobby_button_working")
							);
						ja(W.toNumber(n.val()), this.username, this.password, {
							job: wt.recruit,
						}),
							l.removeClass("kcs_lobby_button_pressed"),
							l.removeClass("kcs_lobby_button_working");
					}),
					c.on("click", async () => {
						const e = W.toNumber(n.val());
						if (
							(c.addClass("kcs_lobby_button_pressed"),
							c.addClass("kcs_lobby_button_working"),
							!(await this.loginWhenNeeded()))
						)
							return (
								c.removeClass("kcs_lobby_button_pressed"),
								void c.removeClass("kcs_lobby_button_working")
							);
						const t = this.$page.find("#serverlist_child"),
							a = W.toNumber(t.find("li").last().text());
						if (
							e <= a &&
							!1 === window.confirm(U.serverIsUpAlready)
						)
							return (
								c.removeClass("kcs_lobby_button_pressed"),
								void c.removeClass("kcs_lobby_button_working")
							);
						c.off("click"), c.text(`${U.waitingForServer} ${e}`);
						let i = null;
						const s = async () => {
							this.loginToLobby(),
								await Ae.wait(3e3),
								(await Ba(e)).redirect &&
									(clearInterval(i),
									c.removeClass("kcs_lobby_button_pressed"),
									c.text(
										`${
											U.serverUp
										} ${new Date().toLocaleString("pl-PL")}`
									),
									ja(e, this.username, this.password, {
										job: wt.newServerStart,
									}));
						};
						(i = setInterval(() => s(), 6e4)), s();
					}),
					n.on("change", () => {
						F.setItem(F.keys.playServer, W.toNumber(n.val()));
					}),
					this.$attackTarget.on("change", () => {
						F.setItem(
							F.keys.attackTarget,
							this.$attackTarget.val()
						);
					}),
					this.$serversPerStep.on("change", () => {
						F.setItem(
							F.keys.serversPerStep,
							W.toNumber(this.$serversPerStep.val())
						);
					}),
					this.$attackCount.on("change", () => {
						F.setItem(
							F.keys.attackCount,
							W.toNumber(this.$attackCount.val())
						);
					});
				const w = o("<span></span>");
				f.after(w),
					Ma(w),
					(window.onkeyup = (e) => {
						document.body === document.activeElement &&
							(e.which === xt.lobby.settlementBuildUp
								? (m.css("color", "cyan"),
								  setTimeout(() => m.trigger("click"), 5e3))
								: e.which === xt.lobby.stoneAttack
								? (u.css("color", "cyan"),
								  setTimeout(() => u.trigger("click"), 5e3))
								: e.which === xt.lobby.wheelSpin
								? (b.css("color", "cyan"),
								  setTimeout(() => b.trigger("click"), 5e3))
								: e.which === xt.lobby.playCastle
								? (s.css("color", "cyan"),
								  s.trigger("click"),
								  setTimeout(() => s.css("color", ""), 1e3))
								: e.which === xt.lobby.playBarracks &&
								  (r.css("color", "cyan"),
								  r.trigger("click"),
								  setTimeout(() => r.css("color", ""), 1e3)));
					});
			}
			display() {
				window.addEventListener("message", (e) =>
					this.receiveAutoWorkSummaries(e)
				);
				const e = o('<div class="kcs_main_box"></div>'),
					t = o(`<div class="kcs_lobby_button">${U.login}</div>`),
					a = o(
						`<input type="number" class="kcs_lobby_input" min="1" size="2" value="${F.getItem(
							F.keys.serverCount
						)}">`
					),
					i = o(
						'<div style="display: inline-block; line-height: 28px; text-align: right; vertical-align: middle;"></div>'
					);
				i
					.append(`${U.username}: `)
					.append(this.$username)
					.append("<br>")
					.append(`${U.password}: `)
					.append(this.$password),
					e.append(
						`<div class="kcs_main_container" style="vertical-align: middle;">${U.credentials}:</div>`,
						i
					),
					i.after(
						"&nbsp;&nbsp;&nbsp;&nbsp;",
						o(
							'<div style="display: inline-block; vertical-align: middle;"></div>'
						).append(t)
					),
					t.click(() => {
						this.login();
					}),
					e.append("<br>"),
					o(
						'<div style="position: relative; left: 120px; line-height: 28px;"></div>'
					)
						.append(`${U.serverCount} `)
						.append(a)
						.appendTo(e);
				const n = o("<div></div>");
				if (
					(e.append(n),
					this.$page.find("body").append(e),
					a.on("change", () => {
						const e = W.toNumber(a.val());
						F.setItem(F.keys.serverCount, e),
							n.empty(),
							e > 0 && this.displayOptions(n, za(e));
					}),
					this.$password.on("change", () => {
						F.setItem(F.keys.password, this.$password.val());
					}),
					this.$username.on("change", () => {
						F.setItem(F.keys.username, this.$username.val());
					}),
					a.val())
				) {
					const e = W.toNumber(a.val());
					e > 0 && this.displayOptions(n, za(e));
				} else {
					let e = null;
					const t = () => {
						if (e) return !0;
						const t = this.$page.find("#serverlist_child");
						if (t.length) {
							const i =
								W.toNumber(t.find("li").last().text()) - 1;
							return (
								a.val(i),
								(e = za(i)),
								F.setItem(F.keys.serverCount, i),
								!0
							);
						}
						return !1;
					};
					if (!t()) {
						let e = !1;
						new MutationObserver(() => {
							t() &&
								!e &&
								((e = !0),
								this.displayOptions(
									n,
									za(F.getItem(F.keys.serverCount))
								));
						}).observe(this.$page.find("#layer_content").get(0), {
							childList: !0,
						});
					}
				}
			}
		}
		function Ia(e) {
			const t = e.parent(),
				a = t.children().first();
			let i;
			t.children().each((t, a) => {
				o(a).is(e) && (i = t);
			});
			const n = t.parent().find("tr").last().children().eq(i);
			return [W.toNumber(n.text()), W.toNumber(a.text())];
		}
		function Ka(e, t) {
			const a = F.getComplexItem(F.keys.mapGroups, e) || {};
			Object.keys(a).includes(`${t}`) ? delete a[t] : (a[t] = 9),
				F.setComplexItem(F.keys.mapGroups, e, a);
		}
		function Wa(e) {
			const t = F.getComplexItem(F.keys.mapGroups, e.villageId) || {};
			e.$tile.find(".kcs_map_groups").remove(),
				Object.keys(t).forEach((t) => {
					e.$innerDiv.append(
						`<div class="kcs_map_groups kcs_map_group_${t}"></div>`
					);
				});
		}
		class Ra {
			constructor(e) {
				(this.$page = e),
					(this.$mapContainer = e.find("#mapContainer").eq(0)),
					(this.$bottom = e.find("table.map_colors").eq(0)),
					(this.coords = null),
					(this.pageTitle = e.find("title").eq(0).text()),
					(this.inputGuard = !1),
					(this.unitInputs = null),
					(this.$durationInput = null);
			}
			get $map() {
				return this.$mapContainer
					.find("#map")
					.eq(0)
					.find("table")
					.eq(0);
			}
			get $xAxis() {
				return this.$map.find("tr").last().children().slice(1);
			}
			get $yAxis() {
				return this.$map.find("tr > *:first-child").slice(0, 13);
			}
			get mapGoLink() {
				const e = (e) =>
						e
							.attr("onclick")
							.match(/\d+/g)
							.map((e) => W.toNumber(e)),
					t = this.$mapContainer
						.find("table:eq(0) > tbody > tr:eq(0) > td")
						.eq(1),
					a = this.$mapContainer
						.find("table:eq(0) > tbody > tr:eq(1) > td")
						.eq(0),
					i = this.$mapContainer
						.find("table:eq(0) > tbody > tr:eq(1) > td")
						.eq(2),
					n = this.$mapContainer
						.find("table:eq(0) > tbody > tr:eq(2) > td")
						.eq(1);
				return { north: e(t), west: e(a), east: e(i), south: e(n) };
			}
			removeHighlights() {
				this.$xAxis.filter("th").css("background", "#D0B57C"),
					this.$xAxis.filter("td").css("background", "#F2D5A2"),
					this.$yAxis.filter("th").css("background", "#D0B57C"),
					this.$yAxis.filter("td").css("background", "#F2D5A2");
			}
			fillCoordsAndRelocationObjs() {
				this.coords = {};
				const e = W.toNumber(
						this.$map.find("tr > *:first-child").first().text()
					),
					t = W.toNumber(
						this.$map.find("tr:last").children().eq(1).text()
					);
				this.$map.find("tr").each((a, i) => {
					if (13 === a) return;
					const n = a + e;
					o(i)
						.children()
						.slice(1)
						.each((e, i) => {
							const s = o(i),
								r = s.find("a").eq(0);
							let l = null,
								c = !1,
								d = null,
								p = !0,
								u = !0;
							if (r.length) {
								const e = r.attr("onmouseover"),
									t = e
										.match(/'(?:[^'\\]|\\.)*'/g)
										.map((e) =>
											e.substring(1, e.length - 1)
										),
									a = t[2]
										.substring(0, t[2].lastIndexOf("("))
										.trim();
								this.pageTitle.match(
									`- ${
										((m = a),
										m.replace(
											/[.*+?^${}()|[\]\\]/g,
											"\\$&"
										))
									} -`
								) && (c = !0),
									(l = W.toNumber(
										W.queryString(r.attr("href")).get("id")
									));
								const i = t[10];
								if (i) {
									const e = i.split(":");
									e.splice(6, 1),
										(d =
											re.arrayWithUnitStrsIntoUnitsObj(
												e
											));
								} else
									d = re.arrayWithUnitStrsIntoUnitsObj([
										0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
									]);
								const n = e.match(
									/,\s(false|true),\s(false|true),\s(false|true)\)\)$/
								);
								(p = "false" === n[1]), (u = "false" === n[2]);
							}
							var m;
							const h = e + t;
							this.coords[`${h}:${n}`] = {
								villageId: l,
								coords: [h, n],
								isMine: c,
								isAttackable: p,
								isConquerable: u,
								units: d,
								$tile: s,
								$innerDiv: s.find("div").eq(0),
								$xAxis: this.$xAxis.eq(e),
								$yAxis: this.$yAxis.eq(a),
							};
						});
				});
			}
			getExpandedCoordObj(e, t) {
				return this.coords[`${e}:${t}`];
			}
			mapCoordsHighlight() {
				this.$map.find("td[class]").on("mouseenter", (e) => {
					this.removeHighlights();
					const t = o(e.currentTarget),
						a = this.getExpandedCoordObj(...Ia(t));
					a.$xAxis.css("background", "yellow"),
						a.$yAxis.css("background", "yellow");
				}),
					this.$map.on("mouseleave", () => {
						this.removeHighlights();
					}),
					this.$xAxis.on("mouseenter", () => {
						this.removeHighlights();
					}),
					this.$yAxis.on("mouseenter", () => {
						this.removeHighlights();
					});
			}
			markTreaties() {
				F.getComplexItem(F.keys.mapSettings, "treaties") &&
					Object.values(this.coords).forEach((e) => {
						e.isAttackable ||
							e.$innerDiv.append(
								o(
									'<div class="kcs_map_overlay kcs_map_overlay_treaty"></div>'
								).append(E.$attackProtection())
							),
							e.isConquerable ||
								e.$innerDiv.append(
									o(
										'<div class="kcs_map_overlay kcs_map_overlay_treaty"></div>'
									).append(E.$conquestProtection())
								);
					});
			}
			markSnobs() {
				F.getComplexItem(F.keys.mapSettings, "snobs") &&
					Object.values(this.coords).forEach((e) => {
						e.isMine &&
							e.units.snob > 0 &&
							e.$innerDiv.append(
								o(
									`<div class="kcs_map_overlay kcs_map_overlay_snob" style="top: 19px"><img src="${re.type.snob.image}"></div>`
								)
							);
					});
			}
			markLargestUnit() {
				F.getComplexItem(F.keys.mapSettings, "largestUnit") &&
					Object.values(this.coords).forEach((e) => {
						if (e.isMine) {
							let t = [0, ""];
							Object.keys(e.units).forEach((a) => {
								if ("snob" !== a) {
									const i = re.type[a].cost[3] * e.units[a];
									i > t[0] && (t = [i, a]);
								}
							}),
								t[0] > 0 &&
									e.$innerDiv.append(
										o(
											`<div class="kcs_map_overlay kcs_map_overlay_unit"><img src="${
												re.type[t[1]].image
											}"></div>`
										)
									);
						}
					});
			}
			markCoords() {
				const e = W.toNumber(W.query.get("x")),
					t = W.toNumber(W.query.get("y"));
				if (e && t) {
					const a = this.getExpandedCoordObj(e, t);
					a &&
						a.$innerDiv.append(
							'<div class="kcs_map_target_settlement_marker"></div>'
						);
				}
				if (e !== xe.coords[0] || t !== xe.coords[1]) {
					const e = this.getExpandedCoordObj(
						xe.coords[0],
						xe.coords[1]
					);
					e &&
						e.$innerDiv.append(
							'<div class="kcs_map_current_settlement_marker"></div>'
						);
				}
				Object.values(this.coords).forEach((a) => {
					!a.isMine ||
						(a.coords[0] === xe.coords[0] &&
							a.coords[1] === xe.coords[1]) ||
						(a.coords[0] === e && a.coords[1] === t) ||
						a.$innerDiv.append(
							'<div class="kcs_map_own_settlement_marker"></div>'
						);
				});
			}
			draw() {
				this.fillCoordsAndRelocationObjs(),
					this.mapCoordsHighlight(),
					this.updateUnitRange(),
					this.markCoords(),
					this.markTreaties(),
					this.markSnobs(),
					this.markLargestUnit(),
					this.markFreeTiles(),
					this.showGroups();
			}
			showGroups() {
				Object.values(this.coords).forEach((e) => {
					if (e.villageId) {
						const t =
							F.getComplexItem(F.keys.mapGroups, e.villageId) ||
							{};
						Object.keys(t).forEach((t) => {
							e.$innerDiv.append(
								`<div class="kcs_map_groups kcs_map_group_${t}"></div>`
							);
						});
					}
				});
			}
			expandTip() {
				const e = this.$page.find("#WzBoDyI").eq(0);
				if (e.length > 0) {
					const t = Ia(this.$findHoveredCell());
					let a = null,
						i = null;
					const n = W.toNumber(W.query.get("x")),
						s = W.toNumber(W.query.get("y"));
					if (n && s && (t[0] !== n || t[1] !== s))
						(i = [n, s]),
							(a = `<span style="color: red">${i[0]}|${i[1]}</span>`);
					else {
						const e =
							"text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;";
						(i = [xe.coords[0], xe.coords[1]]),
							(a = `<span style="color: white; ${e}">${i[0]}|${i[1]}</span>`);
					}
					const r = this.getExpandedCoordObj(...t),
						l = W.calculateDistance(i, t),
						c = e.find("tr");
					c.find("th")
						.eq(0)
						.append(
							"<br>",
							`<span class="kcs_small_text">(id: ${
								r.villageId
							}, ${U.distanceFrom} ${a}: ${l.toFixed(2)} ${
								U.fields
							})</span>`
						);
					const d = F.getComplexItem(F.keys.mapNotes, r.villageId);
					c.eq(0).after(
						o("<tr></tr>")
							.append(`<td>${U.mapNotes}</td>`)
							.append(`<td id="kcs_mapNote">${d || ""}</td>`)
					);
				} else this.inputGuard = !1;
			}
			showOptions() {
				const e = o('<input type="checkbox">');
				e.prop(
					"checked",
					F.getComplexItem(F.keys.mapSettings, "relocation")
				);
				const t = o('<input type="checkbox">');
				t.prop(
					"checked",
					F.getComplexItem(F.keys.mapSettings, "snobs")
				);
				const a = o('<input type="checkbox">');
				a.prop(
					"checked",
					F.getComplexItem(F.keys.mapSettings, "largestUnit")
				);
				const i = o('<input type="checkbox">');
				i.prop(
					"checked",
					F.getComplexItem(F.keys.mapSettings, "treaties")
				);
				const n = this.$page.find("h1").eq(1);
				n.css("display", "inline-block");
				const s = o(
						'<div class="kcs_modern_box" style="position: absolute; top: 95px; right: 32px;"></div>'
					),
					r = o(
						'<div style="display: inline-block; text-align: right;"></div>'
					),
					l = o(
						'<div style="display: inline-block; text-align: right;"></div>'
					);
				r.append(U.showPossibleRelocation, e, "<br>"),
					r.append(U.showTreaties, i, "<br>"),
					l.append(U.showLargestUnitType, a, "<br>"),
					l.append(U.showSnobs, t, "<br>"),
					s.append(
						`<div style="font-weight: bold; text-align: center;">${U.options}</div>`,
						r,
						'<div style="width: 10px; display: inline-block;"></div>',
						l
					),
					n.after(s, "<br>"),
					e.on("change", () => {
						F.setComplexItem(
							F.keys.mapSettings,
							"relocation",
							e.prop("checked")
						),
							this.markFreeTiles();
					}),
					t.on("change", () => {
						F.setComplexItem(
							F.keys.mapSettings,
							"snobs",
							t.prop("checked")
						),
							this.toggleSnobs();
					}),
					a.on("change", () => {
						F.setComplexItem(
							F.keys.mapSettings,
							"largestUnit",
							a.prop("checked")
						),
							this.toggleLargestUnit();
					}),
					i.on("change", () => {
						F.setComplexItem(
							F.keys.mapSettings,
							"treaties",
							i.prop("checked")
						),
							this.toggleTreaties();
					});
			}
			markFreeTiles() {
				F.getComplexItem(F.keys.mapSettings, "relocation")
					? this.$mapContainer.addClass("kcs_mark_free")
					: this.$mapContainer.removeClass("kcs_mark_free");
			}
			toggleSnobs() {
				this.$page.find("div.kcs_map_overlay_snob").remove(),
					this.markSnobs();
			}
			toggleLargestUnit() {
				this.$page.find("div.kcs_map_overlay_unit").remove(),
					this.markLargestUnit();
			}
			toggleTreaties() {
				this.$page.find("div.kcs_map_overlay_treaty").remove(),
					this.markTreaties();
			}
			coordCopyTextBox() {
				const e = o(
						'<textarea wrap="on" style="width: 800px;"></textarea>'
					),
					t = o('<div style="display: none;"></div>').append(e),
					a = [];
				return (
					this.$bottom.before(t),
					(i) => {
						"" === e.val()
							? (a.push(i),
							  t.css("display", "block"),
							  e.append(`${i[0]}|${i[1]}`))
							: a.includes(i) ||
							  (a.push(i), e.append(`, ${i[0]}|${i[1]}`));
					}
				);
			}
			$findHoveredCell() {
				const e = this.$page.find("div#map td div:hover div").eq(0);
				return e.length ? e.closest("td") : null;
			}
			handleKeyPress(e) {
				this.$page.on("keydown", (t) => {
					const a = this.$findHoveredCell();
					if (a && !this.inputGuard)
						if (t.which === xt.map.copyCoords) {
							const t = this.getExpandedCoordObj(...Ia(a));
							t.villageId && e(t.coords);
						} else if (t.which === xt.map.moveMapLeft)
							t.preventDefault(), u(), p(...this.mapGoLink.west);
						else if (t.which === xt.map.moveMapUp)
							t.preventDefault(), u(), p(...this.mapGoLink.north);
						else if (t.which === xt.map.moveMapRight)
							t.preventDefault(), u(), p(...this.mapGoLink.east);
						else if (t.which === xt.map.moveMapDown)
							t.preventDefault(), u(), p(...this.mapGoLink.south);
						else if (t.which === xt.map.enterNote) {
							const e = this.getExpandedCoordObj(...Ia(a));
							if (e.$tile.hasClass("occupied")) {
								this.inputGuard = !0;
								const t = this.$page.find("#kcs_mapNote"),
									a = t.text();
								t.empty();
								const i = o(
									`<input type="text" value="${a}" style="width: 90%;">`
								);
								t.append(i),
									i.focus(),
									i.select(),
									i.on("keydown", (a) => {
										if (13 === a.which) {
											const a = i.val();
											F.setComplexItem(
												F.keys.mapNotes,
												e.villageId,
												a
											),
												t.append(a),
												setTimeout(() => {
													this.inputGuard = !1;
												}, 100),
												i.remove();
										}
									}),
									i.on("blur", () => {
										setTimeout(() => {
											this.inputGuard = !1;
										}, 100),
											i.remove();
									});
							}
						} else if (t.which === xt.map.group1) {
							const e = this.getExpandedCoordObj(...Ia(a));
							e.villageId && (Ka(e.villageId, 0), Wa(e));
						} else if (t.which === xt.map.group2) {
							const e = this.getExpandedCoordObj(...Ia(a));
							e.villageId && (Ka(e.villageId, 1), Wa(e));
						} else if (t.which === xt.map.group3) {
							const e = this.getExpandedCoordObj(...Ia(a));
							e.villageId && (Ka(e.villageId, 2), Wa(e));
						}
				});
			}
			removeUnitRange() {
				this.$page
					.find("div.kcs_map_in_range_settlement_marker")
					.remove(),
					this.$page
						.find("div#map td")
						.removeClass("no-free-highlight");
			}
			displayUnitRange(e) {
				let t;
				this.removeUnitRange();
				const a = W.query.get("x"),
					i = W.query.get("y");
				a && i ? (t = [a, i]) : ({ coords: t } = xe),
					Object.values(this.coords).forEach((a) => {
						W.calculateDistance(t, a.coords) < e &&
							(a.$innerDiv.append(
								'<div class="kcs_map_in_range_settlement_marker"></div>'
							),
							a.$tile.addClass("no-free-highlight"));
					});
			}
			showHotkeys() {
				const e = o(
					'<div class="kcs_modern_box" style="display: inline-block; width: 380px; vertical-align: top; margin-bottom: 8px;"></div>'
				);
				e.append(
					`<span style="font-weight: bold;">${U.mapLegend}</span>`,
					o('<ul style="padding-left: 20px; margin: 0;"></ul>')
						.append(
							`<li style="padding-left: -5px;">${U.mapCopyCoords}</li>`
						)
						.append(
							`<li style="padding-left: -5px;">${U.mapEnterNotes}</li>`
						)
						.append(
							`<li style="padding-left: -5px;">${U.groupsHotkeys}</li>`
						)
				),
					this.$bottom.before(e);
			}
			showDistanceCalcOptions() {
				const e = F.getItem(F.keys.mapSettings, "unitRange");
				e || F.setItem(F.keys.mapSettings, { set: !0 });
				const t = o(
					'<div class="kcs_modern_box" style="float: right; width: 310px; vertical-align: top; margin-right: 22px; position: relative;"></div>'
				);
				t.append(
					`<span style="font-weight: bold;">${U.mapUnitRange} (<span class="kcs_small_text">${U.mapUnitRangeExp}</span>): </span><br>`
				),
					(this.$duration = o(
						`<input type="text" placeholder="00:00" size="3" style="user-select:none;"${
							e.duration ? `value="${e.duration}"` : ""
						}>`
					));
				const a = o(
					'<div style="display: inline-block; vertical-align: middle;"></div>'
				);
				t.append(
					U.duration,
					this.$duration,
					"<br>",
					`<div style="display: inline-block;">${U.mapUnits}&nbsp;</div>`,
					a
				);
				const i = o("<div></div>"),
					n = o(
						`<input type="range" min="0" max="8" step="1" value="${
							e.step || 0
						}" style="margin-top: 1px;">`
					),
					s = o(
						`<img src="${E.raw.noUnit}" style="vertical-align: bottom; cursor: pointer;" draggable="false">`
					);
				var r;
				i.append(s),
					s.on("click", () => {
						n.val(0), n.trigger("input");
					}),
					re.bySpeed.forEach((e, t) => {
						const a = o(
							`<img src="${e.image}" style="vertical-align: bottom; cursor: pointer;" draggable="false">`
						);
						i.append(a),
							a.on("click", () => {
								n.val(t + 1), n.trigger("input");
							});
					}),
					a.append(i),
					a.append(n),
					n.on("input", () => {
						const e = F.getItem(F.keys.mapSettings);
						(e.step = W.toNumber(n.val())),
							F.setItem(F.keys.mapSettings, e),
							this.updateUnitRange();
					}),
					this.$bottom.before(t),
					(r = this.$duration).on("paste", (e) => {
						e.preventDefault();
						const t = e.originalEvent.clipboardData
							.getData("text")
							.match(/(\d{2}):(\d{2})/);
						if (t) {
							let e = "";
							t[1].length < 2 ? (e += `0${t[1]}`) : (e += t[1]),
								(e += `:${t[2]}`),
								r.val(e),
								r.trigger("change");
						}
					}),
					r.on("keydown", (e) => {
						const t = r.get(0),
							a = t.selectionStart;
						if (
							(37 === e.which ||
								39 === e.which ||
								46 === e.which ||
								(86 === e.which && e.ctrlKey) ||
								(67 === e.which && e.ctrlKey) ||
								e.preventDefault(),
							8 === e.which)
						) {
							const e = [...r.val()];
							t.selectionStart !== t.selectionEnd
								? e.splice(
										t.selectionStart,
										t.selectionEnd - t.selectionStart
								  )
								: t.selectionStart > 0 &&
								  (4 === t.selectionStart
										? e.splice(t.selectionStart - 2, 2)
										: e.splice(t.selectionStart - 1, 1));
							const a = [...e.join("").replace(":", "")];
							e.length > 2 && a.splice(2, 0, ":"),
								r.val(a.join("")),
								r.trigger("change");
						} else if (86 === e.which && e.ctrlKey) r.val("");
						else if (e.which > 47 && e.which < 58) {
							const i = [...r.val()];
							i.splice(a, t.selectionEnd - a, e.key);
							const n = [...i.join("").replace(":", "")];
							n.join("").match(/^\d{1,4}$/) &&
								(n.length > 1 &&
									(n.splice(2, 0, ":"),
									(t.selectionEnd = 0),
									(t.selectionStart = 0)),
								n.length > 3 && n[3] > 5 && (n[3] = 5),
								r.val(n.join(""))),
								n.length - 1 < t.selectionEnd &&
									((t.selectionStart = a + 1),
									(t.selectionEnd = a + 1)),
								2 === t.selectionStart &&
									((t.selectionStart = 3),
									(t.selectionEnd = 3)),
								2 === a &&
									((t.selectionStart = 4),
									(t.selectionEnd = 4));
						}
						r.trigger("change");
					}),
					this.$duration.on("change", async () => {
						this.updateUnitRange();
					});
			}
			async updateUnitRange() {
				const e = F.getItem(F.keys.mapSettings),
					t = this.$duration.val();
				if (t.match(/(\d{2}):(\d{2})/)) {
					F.setComplexItem(F.keys.mapSettings, "duration", t);
					const a = Ae.convertHHMMStringIntoSeconds(t);
					if (a && e.step > 0) {
						const t = await re.getServerAwareRuntime(
							re.bySpeed[e.step - 1]
						);
						this.displayUnitRange(a / t);
					} else this.removeUnitRange();
				} else this.removeUnitRange();
			}
			display() {
				this.showOptions(),
					this.showHotkeys(),
					this.showDistanceCalcOptions();
				const e = this.coordCopyTextBox();
				this.handleKeyPress(e),
					new MutationObserver(() => {
						this.draw();
					}).observe(this.$mapContainer.get(0), { childList: !0 }),
					new MutationObserver(() => {
						this.expandTip();
					}).observe(this.$page.find("#WzTtDiV").get(0), {
						childList: !0,
					}),
					new MutationObserver(() => {
						const e = this.$page.find("#WzTtDiV"),
							t = this.$page.find("#WzBoDy");
						e.css("width", "fit-content"),
							t.css("width", "fit-content"),
							e.css("width", "-moz-fit-content"),
							t.css("width", "-moz-fit-content");
					}).observe(this.$page.find("#WzTtDiV").get(0), {
						attributes: !0,
						attributeFilter: ["style"],
					}),
					this.draw();
			}
		}
		class Ea {
			constructor(e) {
				(this.$page = e),
					(this.$messages = this.$page
						.find("table.borderlist")
						.eq(5)),
					(this.isEmpty =
						0 === this.$page.find('input[name="confbox"]').length);
			}
			displayFastFilters() {
				const e = this.$messages.find("th").last();
				e.append(`${U.additionalFilters} `),
					[
						"img/messages/mail_unread.png",
						"img/messages/mail_read.png",
						"img/report/misc.png",
						"img/dots/green.png",
						"img/dots/yellow.png",
						"img/dots/red.png",
						"img/dots/blue.png",
						"img/report/support.png",
						"img/report/trade.png",
					].forEach((t) => {
						const a = o(`<img class="click" src="${t}">`);
						e.append(" ", a);
						let i = !0;
						a.click(() => {
							this.$messages
								.find(`img[src$="${t}"]`)
								.siblings("input")
								.prop("checked", i),
								(i = !i);
						});
					});
			}
			displayFastForward() {
				const e = o(
						`<input type="text" title="${U.semicolonSeparated}">`
					),
					t = o(`<span class="kcs_submit">${U.quickForward}</span>`),
					a = o('<td colspan="3"></td>').append(
						`<b>${U.fastForward}</b> - ${U.recipients} `,
						e,
						" ",
						t
					);
				o("<tr></tr>").append(a).appendTo(this.$messages),
					t.click(() => {
						this.$messages
							.find('input[type="checkbox"]')
							.not(":last")
							.filter(":checked")
							.each(async (a, i) => {
								const n = E.$spinner("14px");
								t.after(n);
								const s = o(i),
									r = o(
										`<span style="color: red">${U.error}</span>`
									),
									l = s.val(),
									c =
										2 ===
										s.parent().parent().parent().children()
											.length,
									d = o(
										await Q.ajax({ url: c ? ze(l) : je(l) })
									);
								if (d.find("p.error").length)
									r.insertAfter(t)
										.fadeIn(300)
										.delay(800)
										.fadeOut(300);
								else {
									const a = d.find("form").eq(0);
									o(
										await Q.ajax({
											url: d.find("form").attr("action"),
											method: "POST",
											data: c
												? `report_to=${e.val()}`
												: `${a
														.find(
															'input[type="checkbox"][name="mid[]"]'
														)
														.serialize()}&msg_text=&msg_to=${e.val()}`,
										})
									).find("p.error").length &&
										r
											.insertAfter(t)
											.fadeIn(300)
											.delay(800)
											.fadeOut(300);
								}
								n.remove();
							});
					});
			}
			display() {
				this.isEmpty ||
					(this.displayFastFilters(), this.displayFastForward());
			}
		}
		class Oa {
			constructor(e) {
				if (
					((this.$page = e),
					(this.$spiedBuildings = null),
					(this.targetInfoVillageLink = null),
					this.$page.find('a[href*="m=forward_report"]').length > 0)
				) {
					const e = this.$page.find(
						'img[src*="img/buildings/main.png"]'
					);
					e.length &&
						(this.$spiedBuildings = e
							.parent()
							.parent()
							.parent()
							.parent());
					const t = this.$page.find('a[href*="info_village"]').eq(1);
					t.length > 0 &&
						(this.targetInfoVillageLink = t.attr("href"));
				}
			}
			displayCalculateHideout() {
				const e = o(
					`<span class="click"> ${U.calculateHideoutLevel} (${U.worksBestRecently})</span>`
				).prepend(E.$arrow());
				this.$spiedBuildings.after(e),
					e.click(async () => {
						e.append(E.$spinner("12px"));
						const t = o(
								await Q.ajax({
									url: this.targetInfoVillageLink,
								})
							),
							a = new ia(t).points;
						let i = 0;
						this.$spiedBuildings.find("tr").each((e, t) => {
							const a = o(t),
								n = a.find("img").attr("src");
							if (n) {
								const e = n.substring(
										n.lastIndexOf("/") + 1,
										n.lastIndexOf(".")
									),
									t = W.toNumber(a.text());
								i += O.type[e].points * t;
							}
						}),
							e.hide();
						const n = (a - i) / O.type.hide.points;
						o("<tr></tr>")
							.append(
								o('<td class="marked_group"></td>').append(
									`<img src="img/buildings/hide.png"> ${
										U.buildings[O.type.hide.name]
									} <b>(${U.level} ${n}??)</b>`
								)
							)
							.appendTo(this.$spiedBuildings);
					});
			}
			display() {
				this.$spiedBuildings &&
					this.targetInfoVillageLink &&
					this.displayCalculateHideout();
			}
		}
		class Pa {
			constructor(e) {
				this.$page = e;
				const t = e.find("table.borderlist");
				(this.$overviewTable = null),
					t.length > 3 && (this.$overviewTable = t.eq(3)),
					(this.buildingsList = [
						O.type.main.name,
						O.type.stone.name,
						O.type.wood.name,
						O.type.iron.name,
						O.type.storage.name,
						O.type.hide.name,
						O.type.farm.name,
						O.type.barracks.name,
						O.type.wall.name,
						O.type.stable.name,
						O.type.market.name,
						O.type.garage.name,
						O.type.snob.name,
						O.type.smith.name,
						O.type.statue.name,
					]);
			}
			displayWarningForBuildingsTooLow() {
				const e = this.$overviewTable.find("tr");
				e.slice(1, e.length - 1).each((e, t) => {
					const a = o(t).children();
					a.slice(2, 16).each((e, t) => {
						const i = o(t);
						i.css("text-align", "center");
						const n = O.type[this.buildingsList[e]],
							s = ft.buildingsOverviewWarn[n.name],
							r = W.toNumber(i.text());
						let l = 0;
						if (
							(a
								.eq(17)
								.find(`img[src$="${n.image}"]`)
								.each(() => {
									l += 1;
								}),
							r + l < s && i.css("background", "red"),
							r < s)
						) {
							const e = s - (r + l);
							i.append(
								`<span class="kcs_small_text"><br>(${Math.max(
									e,
									0
								)})</span>`
							);
						}
					});
				});
			}
			displayFinishedTimeForLastBuilding() {
				const e = this.$overviewTable.find("tr");
				e.slice(1, e.length - 1).each((e, t) => {
					const a = o(t).children().last(),
						i = a.find("img");
					if (i.length) {
						const e = i.last().attr("title");
						a.append(
							` (${e
								.substring(e.indexOf(":") + 2)
								.replace(/ /g, "&nbsp;")})`
						);
					}
				});
			}
			display() {
				this.$overviewTable &&
					(this.displayWarningForBuildingsTooLow(),
					this.displayFinishedTimeForLastBuilding());
			}
		}
		class Fa {
			constructor(e) {
				this.$page = e;
				const t = e.find("table.borderlist");
				(this.$overviewTable = null),
					t.length > 3 && (this.$overviewTable = t.eq(3));
			}
			displayVillageLink() {
				this.$overviewTable.find("td:first-child a").each((e, t) => {
					const a = o(t),
						i = W.queryString(a.attr("href")).get("village");
					a.before(
						o(`<a href="${Oe(i)}"></a>`).append(E.$village()),
						" "
					);
				});
			}
			displayFinishedTimeForLastUnit() {
				const e = this.$overviewTable.find("tr");
				e.slice(1, e.length).each((e, t) => {
					const a = o(t).children().last(),
						i = a.find("img");
					if (i.length) {
						const e = i.last().attr("title");
						a.append(
							` (${e
								.substring(e.indexOf(":") + 2)
								.replace(/ /g, "&nbsp;")})`
						);
					}
				});
			}
			display() {
				this.$overviewTable &&
					(this.displayVillageLink(),
					this.displayFinishedTimeForLastUnit());
			}
		}
		class Da {
			constructor(e) {
				this.$page = e;
				const t = e.find("table.borderlist");
				(this.$overviewTable = null),
					t.length > 3 && (this.$overviewTable = t.eq(3));
			}
			display() {
				if (this.$overviewTable) {
					const e = o(
						`<span class="click"> ${U.researchMissingUnits}</span>`
					).prepend(E.$arrow());
					this.$overviewTable.after(e, "<br>"),
						e.one("click", async () => {
							const t = E.$spinner("15px", "#ff0000");
							e.after(" ", t);
							const a = [];
							this.$overviewTable
								.find("tr")
								.not(":first")
								.each((e, t) => {
									const i = o(t).find("td").eq(0);
									a.push(
										Q.ajax({
											url: We(
												W.queryString(
													i
														.find("a")
														.eq(0)
														.attr("href")
												).get("village")
											),
										})
									);
								});
							const i = await Promise.all([...a]),
								n = [];
							i.forEach(async (e) => {
								const t = new ta(o(e));
								n.push(t.researchMissing());
							}),
								await Promise.all([...n]);
							const s = o(
								await Q.ajax({ url: window.location.href })
							);
							this.$overviewTable.replaceWith(
								s.find("table.borderlist").eq(3)
							),
								t.remove();
						});
				}
			}
		}
		class Na {
			constructor(e) {
				this.$page = e;
				const t = e.find("table.borderlist");
				(this.$upperTable = t.eq(2)),
					(this.$overviewTable = null),
					t.length > 3 && (this.$overviewTable = t.eq(3));
			}
			gatherArmyInfo() {
				const e = o(
					`<span class="kcs_button">${U.gatherArmyInfo}</span>`
				);
				this.$upperTable.find("th").append("&nbsp;&nbsp;&nbsp;", e),
					e.click(async () => {
						const e = o(await Q.ajax({ url: lt() })),
							{ totalScore: t } = new aa(e),
							a = [];
						let i = -1,
							n = null,
							s = null,
							r = null,
							l = [];
						this.$overviewTable
							.find("tr:not(:first)")
							.each((e, t) => {
								(i += 1), e % 4 == 0 && (i = 0);
								const c = o(t),
									d = c.children(),
									p = 0 === i ? 1 : 0;
								if (0 === i)
									(l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
										(r = W.coordsToCoordList(
											c.children().eq(0).attr("title")
										)),
										(n = W.queryString(
											c
												.children()
												.eq(0)
												.find("a")
												.attr("href")
										).get("village")),
										(s = c.children().eq(0).text().trim());
								else if (1 === i) return;
								(l[0] += W.toNumber(d.eq(1 + p).text())),
									(l[1] += W.toNumber(d.eq(2 + p).text())),
									(l[2] += W.toNumber(d.eq(3 + p).text())),
									(l[3] += W.toNumber(d.eq(4 + p).text())),
									(l[4] += W.toNumber(d.eq(5 + p).text())),
									(l[5] += W.toNumber(d.eq(6 + p).text())),
									(l[6] += W.toNumber(d.eq(7 + p).text())),
									(l[7] += W.toNumber(d.eq(8 + p).text())),
									(l[8] += W.toNumber(d.eq(9 + p).text())),
									(l[9] += W.toNumber(d.eq(10 + p).text())),
									(l[10] += W.toNumber(d.eq(11 + p).text())),
									3 === i &&
										a.push({
											id: n,
											name: s,
											coords: r,
											army: l,
										});
							});
						let c = "";
						a.forEach((e) => {
							(c += `${Te}/`),
								(c += `${t}/`),
								(c += `${e.id}/`),
								(c += `${e.name.replace(/\//g, "\\")}/`),
								(c += `${e.coords.join("|")}/`),
								(c += `${e.army.join("|")}<br>`);
						}),
							ce.textCopyBox(c, null, U.gatherArmyInfoText);
					});
			}
			display() {
				this.$overviewTable && this.gatherArmyInfo();
			}
		}
		let Ja = !1;
		function Za(e, t) {
			if (e < 0) return [];
			const a = [...t],
				i = [],
				n = Math.min(e, a.length);
			if (n > 0)
				for (let e = 0; e < n; e += 1) {
					const e = Math.floor(Math.random() * a.length),
						t = a.splice(e, 1)[0];
					i.push(t);
				}
			return i;
		}
		function Ya(e, t) {
			let a = null;
			return (
				Object.keys(t).every((t) =>
					re.type[e].runtime === re.type[t].runtime
						? ((a = t), !1)
						: (!a &&
								re.type[e].runtime > re.type[t].runtime &&
								(a = t),
						  !0)
				),
				a
			);
		}
		async function Qa(e) {
			const t = {
					[re.type.ram.name]: (e) => [
						{
							[re.type.ram.name]: 1,
							[re.type.farmer.name]: 3 * e - 1,
						},
					],
					[re.type.sword.name]: (e) => [
						{
							[re.type.sword.name]: 1,
							[re.type.farmer.name]: 3 * e - 1,
						},
					],
					[re.type.farmer.name]: (e) => [
						{ [re.type.farmer.name]: 3 * e },
					],
					[re.type.light.name]: (e) => [
						{
							[re.type.light.name]: 1,
							[re.type.spy.name]: 3 * e - 1,
						},
					],
					[re.type.spy.name]: () => [{ [re.type.spy.name]: 5 }],
				},
				a = {},
				i = o(await o.ajax({ url: Ye(e) })),
				n = new Vt(i).getBuildingLevel(O.type.barracks.name);
			if (0 === n) return a;
			const s = ve(i).units;
			return (
				Object.keys(t).forEach((e) => {
					t[e](n).some(
						(t) =>
							!!Object.keys(t).every((e) => s[e] >= t[e]) &&
							((a[e] = t), !0)
					);
				}),
				a
			);
		}
		async function Va(e) {
			let t = 0,
				a = [];
			const i = (e) =>
				W.queryString(
					e.find('a[href*="attackPlanerDelete"]').eq(0).attr("href")
				).get("p");
			let n = i(o(await o.ajax({ url: Qe() })));
			const s = Q.safeRequestWaitTimeInMiliseconds(e.length);
			for (const r of e) {
				if (t % 10 == 9) {
					const e = await Promise.race(a);
					(n = i(o(e))), (a = []);
				}
				a.push(o.ajax({ url: Re(xe.id, n, r) })),
					await Ae.wait(s),
					(t += 1);
			}
			await Promise.all([...a]);
		}
		const La = [
			{ name: "noTarget", image: E.raw.delete },
			O.type.wall,
			O.type.statue,
			O.type.main,
			O.type.farm,
		];
		class Ga {
			constructor(e) {
				(this.$page = e),
					(this.$unitsTable = e.find("table.borderlist").eq(3)),
					(this.plannerParameters = {
						$start_x: e.find('input[name="start_x"]').eq(0),
						$start_y: e.find('input[name="start_y"]').eq(0),
						$target_x: e.find('input[name="target_x"]').eq(0),
						$target_y: e.find('input[name="target_y"]').eq(0),
						$day: e.find('input[name="day"]').eq(0),
						$month: e.find('input[name="month"]').eq(0),
						$year: e.find('input[name="year"]').eq(0),
						$hour: e.find('input[name="hour"]').eq(0),
						$minute: e.find('input[name="minute"]').eq(0),
						$second: e.find('input[name="second"]').eq(0),
						$farmer: e.find('input[name="farmer"]').eq(0),
						$sword: e.find('input[name="sword"]').eq(0),
						$spear: e.find('input[name="spear"]').eq(0),
						$axe: e.find('input[name="axe"]').eq(0),
						$bow: e.find('input[name="bow"]').eq(0),
						$spy: e.find('input[name="spy"]').eq(0),
						$light: e.find('input[name="light"]').eq(0),
						$heavy: e.find('input[name="heavy"]').eq(0),
						$ram: e.find('input[name="ram"]').eq(0),
						$kata: e.find('input[name="kata"]').eq(0),
						$snob: e.find('input[name="snob"]').eq(0),
					}),
					(this.$originalPlannerTable = e
						.find("table.borderlist")
						.eq(4)),
					(this.$form = this.$page.find("form").eq(0)),
					(this.formAction = this.$form.attr("action")),
					(this.supportAttacksHistory =
						F.getItem(F.keys.planerSupport) || {}),
					(this.supportAttacks = {}),
					(this.kataTargetHistory =
						F.getItem(F.keys.planerTarget) || {}),
					(this.kataTarget = {}),
					(this.attacks = []),
					(this.firstEligibleAttackIndex = 0);
			}
			armySender() {
				let e,
					t,
					a = 0,
					i = this.firstEligibleAttackIndex,
					n = 0,
					s = 0,
					r = !1,
					l = null;
				const c = (e) => e.time - Ae.serverDate().getTime();
				let d = 0;
				const p = async () => {
					Ja && clearInterval(l);
					const p = ~~(new Date().getTime() / 1e3);
					if (d - p != 0 && ((d = p), (s += 1), !r))
						for (let l = i; l < this.attacks.length; l += 1) {
							const d = this.attacks[l];
							if (
								(c(d) >= 35e3 &&
									s > 60 &&
									((s = 0),
									Q.ajax({ url: Ye(), timeout: 1e4 }),
									Q.log("alive")),
								c(d) >= 12e3 && c(d) < 2e4 && !t)
							)
								(t = !0),
									Zt.attackForced(
										d.sourceId,
										d.target,
										d.units
									),
									(e = null);
							else if (c(d) >= 1e4 && c(d) < 12e3) t = !1;
							else if (c(d) < 1e4 && !e && n < 3) {
								const t = performance.now();
								(r = !0),
									(e = await Zt.attackForced(
										d.sourceId,
										d.target,
										d.units
									)),
									(r = !1),
									(a = Math.round(performance.now() - t)),
									(n += 1);
							}
							if (c(d) > a / 2 + 500) break;
							if (e) {
								let t = d.sendHref;
								d.id in this.supportAttacks ||
									(t += "&attack=1"),
									d.kata &&
										(d.id in this.kataTarget
											? (t += `&kata_target=${
													La[this.kataTarget[d.id]]
														.name
											  }`)
											: (t += `&kata_target=${ft.defaultCatapultTarget}`)),
									o
										.ajax({
											url: Me(d.sourceId, e),
											method: "POST",
											data: t,
											timeout: 1e4,
										})
										.done((e) => {
											const t = o(e).find("p.error");
											t.length &&
												Q.log(
													U.planerAttackFailedToSend,
													t.eq(0).text(),
													d.units
												);
										})
										.fail((e, t, a) => {
											Q.log(
												U.planerAttackFailedToSend,
												a,
												d.units
											);
										});
							} else Q.log(U.planerAttackFailedToSend, d.units);
							(n = 0), (i += 1);
						}
				};
				setTimeout(() => {
					l = setInterval(() => {
						p();
					}, 200);
				}, 1e3 - (new Date().getTime() % 1e3));
			}
			retrievePlannerData() {
				const e = Ae.serverDate().getTime();
				this.$originalPlannerTable.length &&
					this.$originalPlannerTable
						.find("tr:not(:first)")
						.each((t, a) => {
							const i = o(a),
								n = i.children(),
								s = {},
								r = Ae.pageLoadDate.getTime();
							(s.time =
								1e3 *
									W.toNumber(
										n.eq(5).find("span").eq(0).attr("time")
									) +
								r),
								n.eq(5).empty().append(Ae.timeDown(s.time)),
								s.time < e &&
									(this.firstEligibleAttackIndex += 1),
								(s.id = W.queryString(
									n.eq(7).find("a").eq(0).attr("href")
								).get("id")),
								(s.sendHref = n
									.eq(6)
									.find("a")
									.eq(0)
									.attr("href"));
							const l = W.queryString(
									n.eq(1).find("a").eq(0).attr("href")
								),
								c = W.queryString(
									n.eq(2).find("a").eq(1).attr("href")
								);
							(s.sourceId = l.get("id")),
								(s.target = [c.get("x"), c.get("y")]),
								(s.units = re.fromHref(s.sendHref)),
								(s.kata = "kata" in s.units),
								re.isFake(s.units) ||
									i.addClass("kcs_planer_attack"),
								this.attacks.push(s),
								s.id in this.supportAttacksHistory &&
									(this.supportAttacks[s.id] = 1),
								s.id in this.kataTargetHistory &&
									(this.kataTarget[s.id] =
										this.kataTargetHistory[s.id]);
						});
			}
			displayOverdueDelete() {
				const e = o(
					`<img class="click" src="${E.raw.delete}" title="${U.deleteOverdueAttacks}">`
				);
				this.$originalPlannerTable.length &&
					(this.$originalPlannerTable
						.find("tr")
						.eq(0)
						.find("th")
						.eq(6)
						.append(e)
						.css("text-align", "center"),
					e.click(async () => {
						e.replaceWith(E.$spinner("15px"));
						const t = Ae.serverDate().getTime(),
							a = [];
						this.attacks.forEach((e) => {
							e.time < t && a.push(e.id);
						}),
							await Va(a),
							setTimeout(() => window.location.reload(), 1e3);
					}));
			}
			displayMassDelete() {
				const e = o(
						'<div style="display: inline-block; margin: 1px 0 0 5px; width: 130px; text-align: center;"></div>'
					),
					t = o(
						`<div class="kcs_button">${U.massDeleteAttacks}</div>`
					),
					a = o(
						`<div class="kcs_button" style="margin-top: 5px;">${U.massDeleteFakeAttacks}</div>`
					);
				e.append(t, a),
					this.$unitsTable.css("float", "left"),
					this.$unitsTable.after(e, '<br style="clear: both;">'),
					t.click(async () => {
						t.replaceWith(
							o("<div></div>")
								.append(E.$spinner("15px"))
								.css("margin-top", "3px")
								.css("margin-bottom", "20px")
						);
						const e = [];
						this.attacks.forEach((t) => {
							e.push(t.id);
						}),
							e.length && (await Va(e)),
							setTimeout(() => window.location.reload(), 1e3);
					}),
					a.click(async () => {
						a.replaceWith(
							o("<div></div>")
								.append(E.$spinner("15px"))
								.css("margin-top", "6px")
						);
						const e = [];
						this.attacks.forEach((t) => {
							re.isFake(t.units) && e.push(t.id);
						}),
							e.length && (await Va(e)),
							setTimeout(() => window.location.reload(), 1e3);
					});
			}
			establishBroadcast() {
				const e = new BroadcastChannel("KCSToolsAttackPlaner");
				e.postMessage("ping"),
					(e.onmessage = () => {
						(Ja = !0),
							clearTimeout(this.timeoutObj),
							this.$originalPlannerTable.length &&
								this.$originalPlannerTable.hide(),
							this.$form.before(
								`<div style="font-weight: bold; font-size: 19px; text-align: center;">${U.anotherTabProcessing}<div>`,
								"<br>"
							),
							e.close();
					});
			}
			displaySupportAndKataTargetCheckboxes() {
				const e = this.$originalPlannerTable.find("tr");
				e
					.eq(0)
					.prepend(
						`<th style="text-align: center"><img src="${E.raw.support}" title="${U.supportTarget}"></th>`,
						`<th style="text-align: center"><img src="${E.raw.units.kata}" title="${U.kataTarget}"></th>`
					),
					e.slice(1).each((e, t) => {
						const a = o(t),
							i = W.queryString(
								a.children().last().find("a").eq(0).attr("href")
							).get("id"),
							n = o(
								`<input type="checkbox"${
									i in this.supportAttacks ? "checked" : ""
								}>`
							);
						i in this.supportAttacks &&
							a.addClass("kcs_planer_support");
						let s = i in this.kataTarget ? this.kataTarget[i] : 0;
						const r = o(
							`<img class="click" src="${La[s].image}" title="${U.kataTarget}">`
						);
						a.prepend(
							o("<td></td>").append(n),
							o("<td></td>").append(r)
						),
							n.click(() => {
								i in this.supportAttacks
									? (a.removeClass("kcs_planer_support"),
									  delete this.supportAttacks[i])
									: ((this.supportAttacks[i] = 1),
									  a.addClass("kcs_planer_support")),
									F.setItem(
										F.keys.planerSupport,
										this.supportAttacks
									);
							}),
							r.click(() => {
								(s = (s + 1) % La.length),
									r.attr("src", La[s].image),
									0 === s
										? delete this.kataTarget[i]
										: (this.kataTarget[i] = s),
									F.setItem(
										F.keys.planerTarget,
										this.kataTarget
									);
							});
					});
			}
			rememberHistory() {
				const e = this.plannerParameters.$target_x,
					t = this.plannerParameters.$target_y,
					a = this.plannerParameters.$day,
					i = this.plannerParameters.$month,
					n = this.plannerParameters.$year,
					s = this.plannerParameters.$hour,
					r = this.plannerParameters.$minute,
					o = this.plannerParameters.$second,
					l = F.getItem(F.keys.planerHistory);
				if (
					(("0" === e.val() && "0" === t.val()) ||
						(F.setComplexItem(
							F.keys.planerHistory,
							"target_x",
							e.val()
						),
						F.setComplexItem(
							F.keys.planerHistory,
							"target_y",
							t.val()
						)),
					l)
				) {
					const c = new Date(
							n.val(),
							i.val(),
							a.val(),
							s.val(),
							r.val(),
							o.val()
						),
						d = new Date(
							l.year,
							l.month,
							l.day,
							l.hour,
							l.minute,
							l.second
						);
					("0" !== e.val() && "0" !== t.val()) ||
						(e.val(l.target_x), t.val(l.target_y)),
						c < d &&
							(a.val(l.day.toString().padStart(2, "0")),
							i.val(l.month.toString().padStart(2, "0")),
							n.val(l.year),
							s.val(l.hour.toString().padStart(2, "0")),
							r.val(l.minute.toString().padStart(2, "0")),
							o.val(l.second.toString().padStart(2, "0")));
				}
				this.$form.on("submit", () => {
					F.setItem(F.keys.planerHistory, {
						target_x: W.toNumber(e.val()),
						target_y: W.toNumber(t.val()),
						day: W.toNumber(a.val()),
						month: W.toNumber(i.val()),
						year: W.toNumber(n.val()),
						hour: W.toNumber(s.val()),
						minute: W.toNumber(r.val()),
						second: W.toNumber(o.val()),
					});
				});
			}
			handleUnitCount() {
				const e = this.$form.find("tr").last().find("input");
				e.each((e, t) => {
					const a = o(t);
					"0" !== a.val() && a.css("background-color", "yellow");
				}),
					e.on("change", (e) => {
						const t = o(e.currentTarget);
						"" === t.val() || "0" === t.val()
							? t.css("background-color", "")
							: t.css("background-color", "yellow");
					}),
					e.focusin((e) => {
						const t = o(e.currentTarget);
						"0" === t.val() && t.val("");
					}),
					e.focusout((e) => {
						const t = o(e.currentTarget);
						"" === t.val() && t.val("0");
					});
			}
			async oldImportAttacks(e, t, a, i, n, s, r) {
				const l = E.$spinner("15px", "#ff0000");
				e.after(" ", l);
				const c = Ae.serverDate().getTime(),
					d = t[0].split("/"),
					p = d[1].split("/")[0],
					u = d[2].split(".");
				let m = null,
					h = null;
				n ? (h = await H.nightBonus()) : (m = d[3].split(":"));
				const g = [];
				let y;
				y = r
					? [{ id: xe.id, coords: xe.coords }]
					: await (async () => {
							const e = o(await o.ajax({ url: lt() })),
								t = new aa(e),
								a = [];
							return (
								Object.keys(t.settlements).forEach((e) => {
									a.push({
										id: t.settlements[e].id,
										coords: t.settlements[e].coords,
									});
								}),
								a
							);
					  })();
				for (const e of y) {
					const r = await Qa(e.id);
					if (Object.keys(r).length > 0) {
						const o = [],
							l = [],
							d = [];
						let y = null,
							b = 0,
							k = 0,
							f = 0;
						for (const a of t) {
							n
								? ((b =
										h.endHour +
										Math.floor(
											Math.random() *
												(23 - h.endHour - h.startHour)
										)),
								  (k =
										h.endMinute +
										Math.floor(59 * Math.random())),
								  (f = Math.floor(59 * Math.random())),
								  (y = new Date(
										u[2],
										u[1] - 1,
										u[0],
										b,
										k,
										f
								  ).getTime()))
								: ((b = Number(m[0])),
								  (k = Number(m[1])),
								  (f = Number(m[2])),
								  (y = new Date(
										u[2],
										u[1] - 1,
										u[0],
										b,
										k,
										f
								  ).getTime()));
							const t = Math.round((y - c) / 1e3),
								i = a.split("/"),
								s = W.coordsToCoordList(i[0]),
								p =
									await re.calculateTravelTimeInSecondsForEveryUnit(
										e.coords,
										s
									),
								g = [];
							Object.keys(p).forEach((e) => {
								p[e] < t - 240 && g.push(e);
							});
							const w = re.slowestUnitInList(g);
							if (w) {
								const e = Ya(w, r);
								e &&
									(o.push(s), (l[s] = e), (d[s] = [b, k, f]));
							}
						}
						if (0 === o.length) continue;
						if ("fake" === p) {
							const t = [];
							o.forEach((e) => {
								l[e] !== re.type.spy && t.push(e);
							});
							const n = [],
								s = [];
							if (a) {
								const e = Za(i - 4, t);
								if (e.length > 0) {
									s.push(...e);
									const a = Za(2, t)[0];
									n.push(a), s.push(a, a, a, a);
								}
							} else s.push(...Za(i, t));
							for (const t of s) {
								let a = "",
									i = f,
									s = k,
									o = b;
								if (!n.includes(t)) {
									const e = Math.random(),
										t = Math.random(),
										a = Math.random();
									if (e < 0.93) {
										if (t > 0.65)
											if (a > 0.5) {
												const e = -Math.floor(
													180 * Math.random()
												);
												(i += e % 60),
													(s += Math.floor(e / 60));
											} else {
												const e = Math.floor(
													900 * Math.random()
												);
												(i += e % 60),
													(s += Math.floor(e / 60));
											}
										else
											a > 0.5
												? (i += Math.floor(
														40 * Math.random()
												  ))
												: (i -= Math.floor(
														40 * Math.random()
												  ));
										i < 0 && ((i += 60), (s -= 1)),
											s < 0 && ((s += 60), (o -= 1));
									} else
										a > 0.5
											? (i += Math.floor(
													7 * Math.random()
											  ))
											: (i -= Math.floor(
													7 * Math.random()
											  )),
											i < 0 && ((i += 60), (s -= 1)),
											s < 0 && ((s += 60), (o -= 1));
								}
								(a += `start_x=${e.coords[0]}&start_y=${e.coords[1]}`),
									(a += `&target_x=${t[0]}&target_y=${t[1]}`),
									(a += `&day=${u[0]}&month=${u[1]}&year=${u[2]}`),
									(a += `&hour=${o}&minute=${s}&second=${i}`);
								const c = r[l[t]];
								Object.keys(c).forEach((e) => {
									a += `&${e}=${c[e]}`;
								}),
									g.push(a);
							}
						}
						if (("fake" === p && s) || "fast" === p) {
							const t = [],
								n = [];
							if (a) {
								const e = Za(i - 4, o);
								if (e.length > 0) {
									n.push(...e);
									const a = Za(2, o)[0];
									t.push(a), n.push(a, a, a, a);
								}
							} else n.push(...Za(i, o));
							for (const a of n) {
								let i = "",
									n = f,
									s = k,
									r = b;
								if (!t.includes(a)) {
									const e = Math.random(),
										t = Math.random(),
										a = Math.random();
									if (e < 0.93) {
										if (t > 0.4)
											if (a > 0.7) {
												const e = -Math.floor(
													180 * Math.random()
												);
												(n += e % 60),
													(s +=
														Math.floor(e / 60) %
														60),
													(r += Math.floor(e / 3600));
											} else {
												const e = Math.floor(
													500 * Math.random()
												);
												(n += e % 60),
													(s +=
														Math.floor(e / 60) %
														60),
													(r += Math.floor(e / 3600));
											}
										else if (t > 0.1)
											if (a > 0.5) {
												const e = -Math.floor(
													180 * Math.random()
												);
												(n += e % 60),
													(s += Math.floor(e / 60));
											} else {
												const e = Math.floor(
													300 * Math.random()
												);
												(n += e % 60),
													(s += Math.floor(e / 60));
											}
										else
											a > 0.5
												? (n += Math.floor(
														30 * Math.random()
												  ))
												: (n -= Math.floor(
														30 * Math.random()
												  ));
										n < 0 && ((n += 60), (s -= 1)),
											s < 0 && ((s += 60), (r -= 1));
									} else
										a > 0.5
											? (n += Math.floor(
													7 * Math.random()
											  ))
											: (n -= Math.floor(
													7 * Math.random()
											  )),
											n < 0 && ((n += 60), (s -= 1)),
											s < 0 && ((s += 60), (r -= 1));
								}
								(i += `start_x=${e.coords[0]}&start_y=${e.coords[1]}`),
									(i += `&target_x=${a[0]}&target_y=${a[1]}`),
									(i += `&day=${u[0]}&month=${u[1]}&year=${u[2]}`),
									(i += `&hour=${r}&minute=${s}&second=${n}`),
									(i += "&spy=5"),
									g.push(i);
							}
						}
					}
				}
				if (g) {
					let e = [];
					const t = Q.safeRequestWaitTimeInMiliseconds(g.length);
					l.after(
						" ",
						Ae.$timeDown(Math.ceil(t * g.length + c)),
						" "
					);
					let a = 0;
					for (const i of g) {
						if (a % 10 == 9) {
							const t = await Promise.race(e);
							(this.formAction = o(t)
								.find("form")
								.eq(0)
								.attr("action")),
								(e = []);
						}
						e.push(
							o.ajax({
								url: this.formAction,
								method: "POST",
								data: i,
							})
						),
							await Ae.wait(t),
							(a += 1);
					}
					await Promise.all([...e]);
				}
				setTimeout(() => window.location.reload(), 1500);
			}
			displayOldAttacksImport() {
				const e = o(
					`<span class="kcs_button">${U.importAttacks}</span>`
				);
				this.$page
					.find("th")
					.eq(0)
					.append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
					.append(e),
					e.click(async () => {
						const [t, a, i, n, s, r] = await ce.textArmyInputBox();
						if (t) {
							const o = [...t],
								l = "---";
							let c = o.indexOf(l);
							for (; c > -1; ) {
								const t = o.splice(0, o.indexOf(l));
								this.oldImportAttacks(e, t, a, i, n, s, r),
									o.shift(),
									(c = o.indexOf(l));
							}
							this.oldImportAttacks(e, o, a, i, n, s, r);
						}
					});
			}
			async display() {
				Ae.disableKaTimers(),
					Ae.limitAmountUpdated(30),
					this.retrievePlannerData(),
					this.rememberHistory(),
					this.handleUnitCount(),
					this.establishBroadcast(),
					this.armySender(),
					this.displayOverdueDelete(),
					this.displaySupportAndKataTargetCheckboxes(),
					this.displayMassDelete(),
					this.displayOldAttacksImport();
			}
		}
		function Ha(e) {
			const t = document.createEvent("HTMLEvents");
			t.initEvent("click", !0, !0), e.dispatchEvent(t);
		}
		const Xa = (e) => document.URL.match(e);
		function ei() {
			if (
				(Xa("s=info_ally") && !Xa("m=")) ||
				(Xa("s=info_ally") && Xa("m=profile"))
			)
				new _a(h).display();
			else if (
				(Xa("s=info_player") && !Xa("m=")) ||
				(Xa("s=info_player") && Xa("m=profile"))
			)
				new aa(h).display();
			else if (Xa("s=info_village")) new ia(h).display();
			else if (Xa("s=build_barracks") && Xa("sub=send"))
				h.find("p.error").length
					? new Ot(h).display()
					: new Qt(h).display();
			else if ((Xa("s=build_barracks") && !Xa("m=")) || Xa("m=command"))
				new Ot(h).display();
			else if (Xa("s=build_barracks") && Xa("m=massrecruit"))
				new Pt(h).display();
			else if (Xa("m=recruit")) new Yt(h).display();
			else if (Xa("s=build_main"))
				Xa("m=destroy")
					? 0 === h.find('a[href*="&a=destroyBuilding"]').length &&
					  new Vt(h).display()
					: new Vt(h).display();
			else if (Xa("s=build_market") && Xa("inta=send"))
				h.find("p.error").length
					? new Xt(h).display()
					: new Gt(h).display();
			else if ((Xa("s=build_market") && !Xa("m=")) || Xa("m=send"))
				new Xt(h).display();
			else if (Xa("s=build_market") && Xa("m=accept"))
				new Lt(h).display();
			else if (Xa("s=build_market") && Xa("m=own_offer"))
				new Ht(h).display();
			else if (Xa("s=premium") && Xa("m=wheelOfFortune"))
				new ga(h).display();
			else if (Xa("s=messages") && !Xa("id=")) new Ea(h).display();
			else if (Xa("s=messages") && Xa("id="))
				h.find("p.error").length
					? new Ea(h).display()
					: new Oa(h).display();
			else if (Xa("s=ally") && Xa("m=attacks")) new Rt(h).display();
			else if (Xa("s=tools") && Xa("m=attack_planer"))
				new Ga(h).display();
			else if (Xa("s=build_snob")) new ea(h).display();
			else if (Xa("s=ally") && Xa("m=members")) new Et(h).display();
			else if (Xa("s=overview_villages")) {
				let e = null;
				Xa(/&m=[0-9]/) ||
					(e = (function (e) {
						const t = (e) =>
								e.find('img[src*="res2.png"]').length > 0
									? "production"
									: null,
							a = (e) =>
								e
									.find("tr")
									.eq(0)
									.find(`img[src*="${O.type.main.image}"]`)
									.length > 0
									? "buildings"
									: null,
							i = (e) => {
								const t = e.find("a");
								return t.length > 0 &&
									"research" ===
										W.queryString(t.eq(0).attr("href")).get(
											"m"
										)
									? "research"
									: null;
							},
							n = e.find("table.borderlist");
						let s = null;
						return (
							n.length > 3 &&
								[t, i, a].some((e) => ((s = e(n.eq(3))), s)),
							s
						);
					})(h)),
					Xa("m=8") || "research" === e
						? new Da(h).display()
						: Xa("m=2") || "production" === e
						? new Fa(h).display()
						: Xa("m=7") || "buildings" === e
						? new Pa(h).display()
						: Xa("m=4") && Xa("type=all")
						? new Na(h).display()
						: Xa("m=6") &&
						  Xa("type=notignored") &&
						  new xa().display(h);
			} else
				(Xa("s=map") || Xa("s=select_map_coordinates")) &&
					new Ra(h).display();
		}
		function ti() {
			const e = h.find("div.contentpane").last();
			e.hide(),
				o('<div style="text-align: center;"></div>')
					.append(E.$spinner("350px"))
					.insertAfter(e);
		}
		function ai(e) {
			var t;
			window.removeEventListener("message", ai),
				(t = e.data).job === wt.castle
					? (window.location.href = Ye())
					: t.job === wt.barracks
					? (window.location.href = De())
					: t.job === wt.recruit
					? (window.location.href = Ne())
					: t.job === wt.premiumWheelOfFortune
					? (window.location.href = Le())
					: t.job === wt.premiumInventory
					? (window.location.href = Ge())
					: t.job === wt.settlementBuildUp
					? (ti(),
					  (async () => {
							await new Sa(h).settlementBuildUp(), window.close();
					  })())
					: t.job === wt.stoneAttack
					? (ti(),
					  (async () => {
							await new Sa(h).stoneAttack(
								t.target,
								t.attackCount
							),
								window.close();
					  })())
					: t.job === wt.createAlly
					? (ti(),
					  (async () => {
							await new Sa(h).createAlly(t.tag, t.name),
								window.close();
					  })())
					: t.job === wt.wheelSpin
					? (ti(),
					  (async () => {
							const e = await new Sa(h).=WheelSpin(
							const e = await new Sa(h).WheelSpin(
							);
							window.opener.postMessage(
								{
									job: t.job,
									crowns: e.crowns,
									dices: e.dices,
									server: H.id,
								},
								Ue(z.code)
							),
								window.close();
					  })())
					: t.job === wt.newServerStart
					? (async () => {
							await new Sa(h).newServerStart();
					  })()
					: t.job === wt.recruitFarmers &&
					  (async () => {
							ti(),
								await new Sa(h).recruitFarmers(),
								window.close();
					  })();
		}
		!(function () {
			if (
				(Xa(/(?!.*php)gameforge\.com/)
					? ((function (e) {
							const t = e.find("div.openX_int_closeButton").eq(0);
							t.length && t.find("a").eq(0).click();
					  })(h),
					  (function (e) {
							const t = () => {
								const t = e.find("#accept_btn");
								t.length && Ha(t.get(0));
							};
							window.addEventListener("load", () =>
								setTimeout(t, 150)
							);
					  })(h))
					: Xa(/game\.php/) &&
					  ((function (e) {
							e.find("#tut_popup_content_minimized").hide();
							const t = e.find("#tut_popup_content");
							if (t.length) {
								t.hide();
								const e = t
									.find('a[href*="abandonTutorial"]')
									.attr("href");
								Q.ajax({ url: e });
							}
					  })(h),
					  (function (e) {
							const t = () => {
								const t = e.find("#cookieconsent\\:desc");
								t.length &&
									Ha(t.nextAll().find("a").eq(0).get(0));
							};
							window.addEventListener("load", () =>
								setTimeout(t, 150)
							);
					  })(h),
					  h.find("#banner_container").hide(),
					  (function (e) {
							e.find("#popup").hide();
					  })(h),
					  (function (e) {
							const t = o(
								'<a class="widget_icon kcs_widget" href="javascript:;">kcs</a>'
							);
							ft.init(),
								t.click(() => ft.display()),
								e.find("a.widget_icon_3").after("&nbsp;", t);
					  })(h),
					  (function (e) {
							const t = (e) =>
									o(
										'<div class="shortcut_container"></div>'
									).append(
										o(
											'<div class="shortcut_element" style="padding: 0 7px;"></div>'
										)
											.append(
												'<span class="shortcut_element_left"></span>'
											)
											.append(
												o(
													'<span class="shortcut_element_center" style="padding-right: 5px;"></span>'
												).append(
													o(e).prepend(
														'<img src="img/layout/sc_marker.png" class="kcs_shortcut_element">'
													)
												)
											)
											.append(
												'<span class="shortcut_element_right"></span>'
											)
									),
								a = e.find("td.lay_castle_top").eq(0);
							if (a.length) {
								const e = a.children().eq(2);
								e
									.find("span.shortcut_element_center")
									.each((e, t) => {
										const a = o(t),
											i = a.find("a").last().attr("href"),
											n = o(`<a href="${i}"></a>`);
										n.append(
											'<img src="img/layout/sc_marker.png" class="kcs_shortcut_element">'
										);
										const s = a.find(
											"a.shortcut_element_post"
										);
										s.length &&
											n.append(
												'<div style="display: inline-block"><img src="img/ally_forum.png"></div>'
											);
										const r = a.find("img");
										n.append(r.css("padding-right", "3px"));
										const l = a.find("a").last().text();
										n.append(`${s.length ? " " : ""}${l}`),
											a.empty(),
											a.css("padding-right", "5px"),
											a.append(n);
									}),
									e
										.find(
											"span.shortcut_element_center_premium"
										)
										.each((e, t) => {
											const a = o(t),
												i = a
													.find("a")
													.last()
													.attr("href"),
												n = a.find("a").last().text();
											a.empty(),
												a.css("padding-right", "5px"),
												a.append(
													o(
														`<a href="${i}"></a>`
													).append(
														'<img src="img/layout/sc_crown.png" style="vertical-align: bottom; padding-top: 1px;">',
														n
													)
												);
										}),
									e.css("padding-bottom", "12px");
								const i = o(
										`<a href="${ot()}" title="${
											U.hotkey
										}a">${U.overviewArmy}</a>`
									),
									n = o(
										`<a href="${et()}" title="${
											U.hotkey
										}s">${U.overviewSupport}</a>`
									),
									s = o(
										`<a href="${at()}" title="${
											U.hotkey
										}p">${U.overviewProduction}</a>`
									),
									r = o(
										`<a href="${tt()}" title="${
											U.hotkey
										}b">${U.overviewBuildings}</a>`
									),
									l = o(
										`<a href="${it()}" title="${
											U.hotkey
										}t">${U.overviewTransportReceive}</a>`
									),
									c = o(
										`<a href="${Qe()}" title="${
											U.hotkey
										}z">${U.attackPlanner}</a>`
									),
									d = o(
										`<a href="${Je()}" title="${
											U.hotkey
										}r">${U.massRecruit}</a>`
									),
									p = o(
										`<a href="${rt()}" title="${
											U.hotkey
										}m">${U.multiSmith}</a>`
									);
								e.append(
									'<div style="padding-top: 22px;"></div>',
									t(c),
									t(d),
									t(i),
									t(n),
									t(s),
									t(r),
									t(l),
									t(
										`<a href="${nt()}">${
											U.overviewSent
										}</a>`
									),
									t(p)
								);
							}
							window.onkeyup = (e) => {
								document.body === document.activeElement &&
									(e.which === xt.game.overviewArmy
										? (window.location = ot())
										: e.which === xt.game.overviewSupport
										? (window.location = et())
										: e.which === xt.game.overviewProduction
										? (window.location = at())
										: e.which === xt.game.overviewBuildings
										? (window.location = tt())
										: e.which ===
										  xt.game.overviewTransportReceive
										? (window.location = it())
										: e.which === xt.game.toolsAttackPlaner
										? (window.location = Qe())
										: e.which ===
										  xt.game.buildBarracksMassRecruit
										? (window.location = Je())
										: e.which === xt.game.multiSmith &&
										  (window.location = rt()));
							};
					  })(h),
					  (function (e) {
							let t = null;
							e.find("td.quickentry").each((e, a) => {
								const i = o(a);
								t || (t = i.parent());
								const n = i.find("a"),
									s = n.eq(0).attr("href");
								n.each((e, t) => {
									const a = o(t);
									a.children().length
										? a.replaceWith(a.html())
										: a.replaceWith(
												`<span class="kcs_quick_entry_txt">${a.html()}</span>`
										  );
								});
								const r = o(
									`<a href="${s}" class="kcs_quick_entry"></a>`
								);
								i.appendTo(r), t.append(r);
							});
					  })(h)),
				Xa(/(?!.*php)gameforge\.com/))
			)
				window.name.match(wt.lastVisited)
					? (async () => {
							const e = window.name.split("|server|")[1],
								t = new Ua(h);
							try {
								const a = await t.loginToGameServer(e);
								window.location.href = a.redirect;
							} catch (e) {
								(window.name = ""), new Ua(h).display();
							}
					  })()
					: new Ua(h).display();
			else if (Xa(/game\.php.+$/))
				F.setItem(F.keys.lastVisited, document.URL),
					(Xa("s=ally") && Xa("m=attacks")) ||
						vt.setTimestampCheckpointWhenNoAttacks(
							Ae.pageLoadDate.getTime()
						),
					new Sa(h).attacksWatcher(),
					ei();
			else if (Xa(/game\.php$/))
				window.name.match(wt.lastVisited)
					? window.close()
					: window.addEventListener("message", ai);
			else if (Xa(/error\.php/)) {
				const e = window.open(
					Ue(z.code),
					`${wt.lastVisited}|server|${H.id}`
				);
				!(function t() {
					if (!1 === e.closed)
						setTimeout(() => {
							t();
						}, 50);
					else {
						const e = F.getItem(F.keys.lastVisited) || ut();
						window.location.href = e;
					}
				})();
			}
		})();
	},
]);
