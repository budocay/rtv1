"use strict";

function	the_most_little_k(k_tab)
{
    var		min_val;
    var		i;
    var		ret;

    min_val =  Infinity;
    i = 0;
    ret = -1;
    while (i < k_tab.length)
    {
	if (k_tab[i] < min_val && k_tab[i] > 0 && k_tab[i] !== null)
	{
	    min_val = k_tab[i];
	    ret = i;
	}
	i++;
    }
    if (min_val === 0)
	return (0);
    return (ret);
}

function	k_is_valide(most_near_object, x, y, img)
{
    if (most_near_object)
	my_put_pixel_to_image(x, y, img, most_near_object.color);
    else
	my_put_pixel_to_image(x, y, img, 0x000000);
}
