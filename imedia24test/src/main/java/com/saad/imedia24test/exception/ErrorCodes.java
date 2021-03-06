package com.saad.imedia24test.exception;

public enum ErrorCodes {

    PRODUCT_NOT_FOUND(1000),
    PRODUCT_NOT_VALID(1001),
    PRODUCT_ALREADY_IN_USE(1002),

    CATEGORY_NOT_FOUND(2000),
    CATEGORY_NOT_VALID(2001),
    CATEGORY_ALREADY_IN_USE(2002);


    private int code;

    ErrorCodes(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}
