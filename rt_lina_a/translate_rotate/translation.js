"use strict";
function	do_translat_and_rotate(conf, obj)
{
    conf.oeil.z -= obj.pos.z;
    conf.oeil.y -= obj.pos.y;
    conf.oeil.x -= obj.pos.x;
    rotate_x(conf.oeil, obj.rot.x);
    rotate_y(conf.oeil, obj.rot.y);
    rotate_z(conf.oeil, obj.rot.z);
    rotate_x(conf.v, obj.rot.x);
    rotate_y(conf.v, obj.rot.y);
    rotate_z(conf.v, obj.rot.z);
}

function	translat_and_rotate_recovery(conf, obj)
{
    rotate_z(conf.oeil, -obj.rot.z);
    rotate_y(conf.oeil, -obj.rot.y);
    rotate_x(conf.oeil, -obj.rot.x);
    rotate_z(conf.v, -obj.rot.z);
    rotate_y(conf.v, -obj.rot.y);
    rotate_x(conf.v, -obj.rot.x);
    conf.oeil.x += obj.pos.x;
    conf.oeil.y += obj.pos.y;
    conf.oeil.z += obj.pos.z;
}
