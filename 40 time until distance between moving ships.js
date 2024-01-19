
//
function findTimeToBreak(ship1Bearing, ship2Bearing) {
  const speed = 90; // miles per hour
  const netLength = 40; // miles

  // Convert angles to radians
  const angle1 = (ship1Bearing * Math.PI) / 180;
  const angle2 = (ship2Bearing * Math.PI) / 180;

  // Calculate the relative velocity components
  const v1x = speed * Math.sin(angle1);
  const v1y = speed * Math.cos(angle1);
  const v2x = speed * Math.sin(angle2);
  const v2y = speed * Math.cos(angle2);

  // Calculate the relative velocity between the two ships
  const relativeVx = v2x - v1x;
  const relativeVy = v2y - v1y;

  // Calculate the time to reach a distance of 40 miles
  const time = netLength / Math.sqrt(relativeVx * relativeVx + relativeVy * relativeVy);

  return isFinite(time) ? time * 60 : Infinity;
}
