package com.saad.imedia24test.services;

import java.io.InputStream;

public interface FlickrService {

    String savePhoto(InputStream photo, String title);
}
