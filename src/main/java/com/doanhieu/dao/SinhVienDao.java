package com.doanhieu.dao;

import com.doanhieu.model.SinhVien;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
/**
 * Created by DELL on 06/15/2018.
 */
@Repository
public interface SinhVienDao extends AbstractDao<SinhVien,String>{
}
