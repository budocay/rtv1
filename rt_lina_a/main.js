function        my_put_pixel_to_image(x, y, img, colorInt)
{
    var         pixel;
    var		      color;

    color = [];
    color[0] = (colorInt & 0xff0000) >> 16;
    color[1] = (colorInt & 0x00ff00) >> 8;
    color[2] = (colorInt & 0x0000ff);
    pixel = ((y * 800 * 4) + x * 4);
    img.data[pixel++] = color[0];
    img.data[pixel++] = color[1];
    img.data[pixel++] = color[2];
    img.data[pixel++] = 255;
    return (img);
}

function        calc_config(conf, objs, lums)
{
    var         k;
    var         most_near_object;
    var         i;

    k = [];
    while (conf.y < conf.win.height)
    {
        conf.x = 0;
        while (conf.x < conf.win.width)
        {
            conf.v.y = conf.win.width / 2 - conf.x;
            conf.v.z = conf.win.height / 2 - conf.y;
          i = -1;
            while (++i < objs.length)
                objs_stock(conf, objs, i, k, lums);
            most_near_object = the_most_little_k(k);
            k_is_valide(objs[most_near_object], conf.x, conf.y, conf.img);
            conf.x++;
        }
        conf.y++;
    }
}

function	main()
{
    var		conf =
    	{
        x: 0,
        y: 0,
        img: 0,
    	  win: {
        win:0,
    		height: 600,
    		width: 800
    	    },
    	    oeil: {
    		x: -600,
    		y: 10,
    		z: 100
    	    },
    	  v: {
    		x: 100,
    		y: 0,
    		z: 0
    	    }
    	};

    mlj_init("Ray-Tracer");
    conf.win.win = mlj_new_window(conf.win.width, conf.win.height);
    conf.img = mlj_new_image(conf.win.win, conf.win.width, conf.win.height);
    calc_config(conf, objs, lums);
    mlj_put_image_to_window(conf.win.win, conf.img, 0, 0);
}
