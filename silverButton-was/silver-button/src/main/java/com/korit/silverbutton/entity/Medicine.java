package com.korit.silverbutton.entity;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "medicine")
@Builder
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "item_seq")
    private Long itemSeq;

    @Column(name = "item_name")
    private String itemName;

    @Column(name="efcy_qesitm")
    private String efcyQesitm;

    @Column(name = "use_method_qesitm")
    private String useMethodQesitm;

    @Column(name = "atpn_qesitm")
    private String atpnQesitm;

    @Column(name = "se_qesitm")
    private String seQesitm;

    @Column(name = "deposit_method_qesitm")
    private String depositMethodQesitm;

    @Column(name = "intrc_qesitm")
    private String intrcQesitm;

    @Column(name="medicine_image")
    private String medicineImage;
}