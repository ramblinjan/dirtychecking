/*!
 * CanJS - 2.1.0-pre
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Mon, 19 May 2014 19:36:30 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */
define(["can/util/library", "can/map", "can/list", "can/compute"], function (can) {
	can.Observe = can.Map;
	can.Observe.startBatch = can.batch.start;
	can.Observe.stopBatch = can.batch.stop;
	can.Observe.triggerBatch = can.batch.trigger;
	return can;
});