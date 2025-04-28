export function parseActivatePathname(){
  const pathname = getActivePathname();
  
  return extractPathnameSegments(pathname);
}

// parse url utama
function extractPathnameSegments(pathname) {
  const splitPath = pathname.split('/');

  return {
    resource: splitPath[1] || null,
    id: splitPath[2] || null,
  };
}

function parsePathnameSegments(pathname) {
  const splitPath = pathname.split('/');

  return {
    resource: splitPath[1] || null,
    id: splitPath[2] || null,
  };
}

function constructRouteFromSegments(pathSegments) {
  let pathname = '';

  if (pathSegments.resource) {
    pathname = pathname.concat(`/${pathSegments.resource}`);
  }

  if (pathSegments.id) {
    pathname = pathname.concat('/:id');
  }

  return pathname || '/';
}

export function getActivePathname() {
  return location.hash.replace('#', '') || '/';
}

export function getActiveRoute() {
  const pathname = getActivePathname();
  const pathSegments = parsePathnameSegments(pathname);

  return constructRouteFromSegments(pathSegments);
}

export function getRoute(pathname){
  const pathsegments = extractPathnameSegments(pathname);
  return constructRouteFromSegments(pathsegments);
}

export function parsePathname(pathname){
  return extractPathnameSegments(pathname);
}
