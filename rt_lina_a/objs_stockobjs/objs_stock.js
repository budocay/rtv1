"use strict";
function	objs_stock(conf, objs, i, k, lums)
{
    var		color;
    var   cosa;

    if (objs[i].type == "sphere")
	k[i] = calcul_sphere(conf, objs[i]);
    else if (objs[i].type == "cylindre")
	k[i] = calcul_cylinder(conf, objs[i]);
    else if (objs[i].type == "cône")
	k[i] = calcul_cône(conf, objs[i]);
    else  if (objs[i].type == "plan")
	k[i] = calcul_plan(conf, objs[i]);
    cosa = luminosity(conf, lums);
    color = mul_color(cosa, objs[i].color);
}

function	mul_color(cosa, color)
{
    var		r;
    var		b;
    var		g;
    var		new_color;

    r = (color & 0xff0000) >> 16;
    g = (color & 0x00ff00) >> 8;
    b = (color & 0x0000ff);
    r = (r * cosa);
    g = (g * cosa);
    b = (b * cosa);
    new_color = 0;
    new_color += b;
    new_color += g << 8;
    new_color += r << 16;
    return (new_color);
}

function	luminosity(conf, lums)
{
    var   lx;
    var   ly;
    var   lz;
    var   scalaire;
    var   normal;
    var   normal_lums;
    var   cosa;

    lx = conf.v.x - lums[0].pos.x;
    ly = conf.v.y - lums[0].pos.y;
    lz = conf.v.z - lums[0].pos.z;
    scalaire = (conf.v.x * lx) + (conf.v.y * ly) + (conf.v.z * lz);
    normal = Math.sqrt(Math.pow(conf.v.x, 2) + Math.pow(conf.v.y, 2) +
		       Math.pow(conf.v.z, 2));
    normal_lums = Math.sqrt(Math.pow(lx, 2) + Math.pow(ly, 2)+ Math.pow(lz, 2));
    cosa = (scalaire / (normal * normal_lums));
    if (cosa <= 0)
	return (0);
    return (cosa);
}
