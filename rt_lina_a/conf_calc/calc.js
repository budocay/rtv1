"use strict";
function        calcul_plan(conf, obj)
{
    var         k;

    k = 0;
    do_translat_and_rotate(conf, obj);
    if (conf.v.z !== 0)
	k = (-1 * (conf.oeil.z / conf.v.z));
    translat_and_rotate_recovery(conf, obj);
    if (k < 0 || k === null || k === undefined)
        return (0);
    else
        return (k);
}

function        calcul_sphere(conf, obj)
{
    var         a;
    var         b;
    var         c;
    var         delta;
    var		ret;

    do_translat_and_rotate(conf, obj);
    a = (Math.pow(conf.v.x, 2) + Math.pow(conf.v.y, 2) + Math.pow(conf.v.z, 2));
    b = (2 * ((conf.oeil.x * conf.v.x) +(conf.oeil.y * conf.v.y) +
              (conf.oeil.z * conf.v.z)));
    c = (Math.pow(conf.oeil.x, 2) + Math.pow(conf.oeil.y, 2) +
	 Math.pow(conf.oeil.z, 2) - Math.pow(obj.radius, 2));
    delta = (b * b) - (4 * (a * c));
    ret = get_k(conf, delta, b, a);
    translat_and_rotate_recovery(conf, obj);
    return (ret);
}

function	calcul_cylinder(conf, obj)
{
    var		a;
    var		b;
    var		c;
    var		delta;
    var		ret;

    do_translat_and_rotate(conf, obj);
    a = Math.pow(conf.v.x, 2) + Math.pow(conf.v.y, 2);
    b = (2 * conf.v.x * conf.oeil.x) + (2 * conf.v.y * conf.oeil.y);
    c = Math.pow(conf.oeil.x, 2) + Math.pow(conf.oeil.y, 2) -
	Math.pow(obj.radius, 2);
    delta = Math.pow(b, 2) - (4 * (a *c));
    ret = get_k(conf, delta, b, a);
    translat_and_rotate_recovery(conf, obj);
    return (ret);
}

function	calcul_cône(conf, obj)
{
    var		a;
    var		b;
    var		c;
    var		delta;
    var		ret;
    var		angle;

    do_translat_and_rotate(conf, obj);
    angle = (obj.radius * Math.PI) / 180;
    a = Math.pow(conf.v.x, 2) + Math.pow(conf.v.y, 2) - Math.pow(conf.v.z, 2) /
	Math.pow(Math.tan(angle), 2);
    b = (2 * conf.oeil.x * conf.v.x) + (2 * conf.oeil.y * conf.v.y) -
        (2 * conf.oeil.z * conf.v.z) / Math.pow(Math.tan(angle), 2);
    c = Math.pow(conf.oeil.x, 2) + Math.pow(conf.oeil.y, 2) -
	Math.pow(conf.oeil.z, 2) / Math.pow(Math.tan(angle), 2);
    delta = Math.pow(b, 2) - (4 * (a * c));
    ret = get_k(conf, delta, b,  a);
    translat_and_rotate_recovery(conf, obj);
    return (ret);
}
