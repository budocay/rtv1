"use strict";
function        get_k(conf, delta, b, a)
{
    var         k;
    var         k_pos;
    var         k_neg;

    k = 0;
    if (delta >= 0)
    {
        k_pos = ((-b + Math.sqrt(delta)) / (2 * a));
        k_neg = ((-b - Math.sqrt(delta)) / (2 * a));
        if (k_pos > k_neg && k_neg > 0)
            k = k_neg;
	else if (k_pos <= k_neg && k_pos > 0)
            k = k_pos;
    }
    else
        k = 0;
    return (k);
}
