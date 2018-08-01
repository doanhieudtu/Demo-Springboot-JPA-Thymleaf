package com.doanhieu.daoimpl;

import com.doanhieu.dao.SinhVienDao;
import com.doanhieu.model.SinhVien;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.transaction.Transaction;
import java.util.List;
import java.util.Optional;

import static javafx.scene.input.KeyCode.T;

/**
 * Created by DELL on 06/15/2018.
 */
@Repository
public class SinhVienImpl extends AbstractImpl<SinhVien,String> implements  SinhVienDao{
}
