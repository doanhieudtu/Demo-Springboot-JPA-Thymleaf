package com.doanhieu.dao;

import java.io.Serializable;
import java.util.List;

/**
 * Created by DELL on 06/20/2018.
 */
public interface AbstractDao<T,ID extends Serializable> {
    int Add(T enTiTy);
    int DeleteT(T enTity);
    Object[] FinbyProperty(String property, Object value);
    List<T> FindAll();
}
