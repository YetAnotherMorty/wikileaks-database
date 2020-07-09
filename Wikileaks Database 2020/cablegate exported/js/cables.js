var eo = ['by_A', 'by_B', 'by_C', 'by_D', 'by_E', 'by_F', 'by_G', 'by_H', 'by_I', 'by_J', 'by_K', 'by_L', 'by_M', 'by_N', 'by_O', 'by_P', 'by_Q', 'by_R', 'by_S', 'by_T', 'by_U', 'by_V', 'by_W', 'by_Y', 'by_X', 'by_Z'];
var et = ['tag_A', 'tag_B', 'tag_C', 'tag_D', 'tag_E', 'tag_F', 'tag_G', 'tag_H', 'tag_I', 'tag_J', 'tag_K', 'tag_L', 'tag_M', 'tag_N', 'tag_O', 'tag_P', 'tag_Q', 'tag_R', 'tag_S', 'tag_T', 'tag_U', 'tag_V', 'tag_W', 'tag_X', 'tag_Y', 'tag_Z'];
var ey = ['year_1966', 'year_1972', 'year_1973', 'year_1975', 'year_1978', 'year_1979', 'year_1985', 'year_1986', 'year_1987', 'year_1988', 'year_1989', 'year_1990', 'year_1991', 'year_1992', 'year_1993', 'year_1994', 'year_1995', 'year_1996', 'year_1997', 'year_1998', 'year_1999', 'year_2000', 'year_2001', 'year_2002', 'year_2003', 'year_2004', 'year_2005', 'year_2006', 'year_2007', 'year_2008', 'year_2009', 'year_2010'];
var e = eo.concat( ey, et );

var swap = function( id ) {
	
	for( i in e ) {
		var obj = document.getElementById( e[i] );
		if( !obj ) {
			continue;
		}
		if( e[i] == id ) {
			obj.style['display'] = 'block';
			continue;
		}
		obj.style['display'] = 'none';
	}
	return false;
}

var sha = function( id ) {
	for( i in ey ) {
		var obj = document.getElementById( ey[i] );
		if( obj )
			obj.style['display'] = ( id == 0 ? 'block' : 'none' );
	}
	for( i in eo ) {
		var obj = document.getElementById( eo[i] );
		if( obj )
			obj.style['display'] = ( id == 0 ? 'none' : 'block' );
	}
	return false;
}
var sh = function( id ) {


	o = document.getElementById( "help_" + id );
	if( o ) {
		o.style['display'] = ( o.style['display'] == 'none' ? 'block' : 'none' );
	}
	return false;
}

for( i in e ) {
	var obj = document.getElementById( e[i] );
	if( obj )
		obj.style['display'] = 'none';
}
sh( 1 ); sh( 2 );