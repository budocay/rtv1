"use strict";
function	rotate_x(voxel, a)
{
    var		tmp;
    var		angle;

    angle = (a * Math.PI) / 180;
    tmp = voxel.y * Math.cos(angle) - voxel.z * Math.sin(angle);
    voxel.z = voxel.y * Math.sin(angle) + voxel.z * Math.cos(angle);
    voxel.y = tmp;
}

function	rotate_y(voxel, a)
{
    var		tmp;
    var		angle;

    angle = (a * Math.PI) / 180;
    tmp = voxel.x * Math.cos(angle) + voxel.z * Math.sin(angle);
    voxel.z = voxel.x * (-Math.sin(angle)) + voxel.z * Math.cos(angle);
    voxel.x = tmp;
}

function	rotate_z(voxel, a)
{
    var		tmp;
    var		angle;

    angle = (a * Math.PI) / 180;
    tmp = voxel.x * Math.cos(angle) + voxel.y * (-Math.sin(angle));
    voxel.y = voxel.x * Math.sin(angle) + voxel.y * Math.cos(angle);
    voxel.x = tmp;
}
